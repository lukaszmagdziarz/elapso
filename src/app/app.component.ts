import { CountersService } from './counters/counters.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, enableProdMode, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyApp';

  @ViewChild('image') image: ElementRef;
  db: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;
  storageRef: firebase.storage.Reference;
  imageUrl: string;
  metaData;

  constructor(private countersService: CountersService) {
  }

  onSubmit(ciekaw: NgForm) {
    console.log(ciekaw);
  }

  ngOnInit() {
    //
    // console.log('███████╗██╗      █████╗ ██████╗ ███████╗ ██████╗ ');
    // console.log('██╔════╝██║     ██╔══██╗██╔══██╗██╔════╝██╔═══██╗');
    // console.log('█████╗  ██║     ███████║██████╔╝███████╗██║   ██║');
    // console.log('██╔══╝  ██║     ██╔══██║██╔═══╝ ╚════██║██║   ██║');
    // console.log('███████╗███████╗██║  ██║██║██╗  ███████║╚██████╔╝');
    // console.log('╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚══════╝ ╚═════╝ ');



    // make sure on start we have all counters
    // this.countersService.onGetCounters().subscribe(
    //   () => {}
    // );


        // // Initialize Cloud Firestore through Firebase
        // this.db = firebase.firestore();

        // // Disable deprecated features
        // this.db.settings({
        //   timestampsInSnapshots: true
        // });

        // this.db.collection('users').add({
        //    first: 'Ada',
        //    last: 'Lovelace',
        //    born: 1815
        //  })
        //  .then(function(docRef) {
        //      console.log('Document written with ID: ', docRef.id);
        //  })
        //  .catch(function(error) {
        //      console.error('Error adding document: ', error);
        //  });
  }

  // onFileChange(event: any) {

  //   if (event.target.files && event.target.files.length) {

  //     const [file] = event.target.files;

  //     this.storage = firebase.storage();
  //     this.storageRef = this.storage.ref().child(firebase.app().auth().currentUser.email + '-' + file.name);

  //     const task: firebase.storage.UploadTask = this.storageRef.put(file);
  //     task.then(
  //       (resp) => {
  //         // console.log(resp);
  //         // console.log(this.storageRef.getDownloadURL());

  //         this.storageRef.getDownloadURL().then(
  //           (fileName) => {
  //             this.image.nativeElement.src = fileName;
  //             // console.log(fileName);
  //             // console.log(this.image.nativeElement.src);
  //           }
  //         );

  //         this.storageRef.getMetadata().then(
  //           (metaData) => {
  //             this.metaData = metaData;
  //             // console.log(fileName);
  //             // console.log(this.image.nativeElement.src);
  //           }
  //         );
  //       }
  //     );
  //   }
  // }
}
