import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: './main/main.module#MainModule', canActivate:[AuthGuard]},
  {path: 'users', loadChildren: './users/users.module#UsersModule', canActivate:[AuthGuard]},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
