import { AngularFireStorage } from '@angular/fire/storage';
import { CountersService } from './counters/counters.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TreeComponent } from './tree/tree.component';
import { LeafComponent } from './leaf/leaf.component';
import { HttpModule } from '@angular/http';
import { TreeService } from './tree/tree.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CounterComponent } from './counter/counter.component';
import { CountersComponent } from './counters/counters.component';
import { CounterEditComponent } from './counter-edit/counter-edit.component';
import { CounterListItemComponent } from './counter-list-item/counter-list-item.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CounterAddComponent } from './counter-add/counter-add.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    TreeComponent,
    LeafComponent,
    SignupComponent,
    SigninComponent,
    FooterComponent,
    HomeComponent,
    LinkComponent,
    NotFoundComponent,
    CounterComponent,
    CountersComponent,
    CounterEditComponent,
    CounterListItemComponent,
    CounterAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-second-app'),
    AngularFireDatabaseModule,
    ShareButtonsModule
  ],
  providers: [AuthService, AuthGuard, TreeService, CountersService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
