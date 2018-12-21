import { CounterAddComponent } from './counter-add/counter-add.component';
import { CounterEditComponent } from './counter-edit/counter-edit.component';
import { CounterComponent } from './counter/counter.component';
import { CountersComponent } from './counters/counters.component';
import { AuthGuard } from './auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkComponent } from './link/link.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/counters', pathMatch: 'full' },
  { path: 'tree', component: TreeComponent, canActivate: [AuthGuard] },
  { path: 'counters', component: CountersComponent, canActivate: [AuthGuard] },
  { path: 'counters/add', component: CounterAddComponent, canActivate: [AuthGuard] },
  { path: 'counters/:id', component: CounterComponent, canActivate: [AuthGuard] },
  { path: 'counters/:id/edit', component: CounterEditComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'link', component: LinkComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
