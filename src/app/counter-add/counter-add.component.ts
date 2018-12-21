import { Image } from './../models/image.model';
import { map } from 'rxjs/operators/map';
import { Counter } from '../models/counter.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AngularFireDatabase,
  AngularFireList } from '@angular/fire/database';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask } from '@angular/fire/storage';

import * as firebase from 'firebase/app';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { FirebaseOperation, DatabaseSnapshot, AngularFireAction } from '@angular/fire/database/interfaces';


@Component({
  selector: 'app-counter-add',
  templateUrl: './counter-add.component.html',
  styleUrls: ['./counter-add.component.css']
})
export class CounterAddComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: string;
  downloadThumbnailURL: string;
  path: string;
  counters: AngularFireList<Counter>;
  images: AngularFireList<Image>;
  key: string;


  imagesRef: AngularFireList<Image>;
  imagesData: Subscription;


  constructor(private router: Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private sanitizer: DomSanitizer) {

      this.counters = db.list('/counters');
    }


  ngOnInit() {
  }


  onSubmit() {

    const str = 'images/' + firebase.auth().currentUser.email + '/' + this.path;

    this.imagesRef = this.db.list('images/', ref => ref.orderByChild('id').equalTo(str));
    this.imagesData = this.imagesRef.snapshotChanges().subscribe(
      resp => {

        if (!resp[0]) {
          console.log('No data found...');
          return;
        }

        this.key = resp[0].key;
        this.downloadThumbnailURL = resp[0].payload.val().thumbnail;

        firebase.database().ref().child(`/images/${this.key}/`).remove().then(
          () => {
             console.log('Image record deleted!');

            const newCounter = new Counter(
              Date.now(),
              this.form.value.name,
              this.form.value.description,
              this.form.value.date,
              this.downloadURL,
              this.downloadThumbnailURL
            );

            // console.log(newCounter);

            this.counters.push(newCounter);
            this.router.navigateByUrl('/counters');
          }
        );
      }
    );
  }

  upload(event: any) {

    const [file] = event.target.files;
    this.path = file.name;

    // const id = Math.random().toString(36).substring(2);

    // this.task = this.storage.upload(path, file);
    const ref = this.storage.ref('');

    // Listen for state changes, errors, and completion of the upload.
    // const uploadTask: AngularFireUploadTask = ref.child('images/' + firebase.app().auth().currentUser.email + '/' + file.name).put(file);
    this.task = ref.child('images/' + firebase.app().auth().currentUser.email + '/' + file.name).put(file);

    this.uploadProgress = this.task.percentageChanges();
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));


    this.task.task.on (firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot: any) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      (error: any) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, () => {
        // Upload completed successfully, now we can get the download URL
        this.task.task.snapshot.ref.getDownloadURL().then(
          (downloadURL: string) => {
            this.downloadURL = downloadURL;
            console.log('File available at', downloadURL);
        });
      }
    );
  }
}
