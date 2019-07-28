import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'listing', pathMatch: 'full'},
  {path: 'listing', component: ListingComponent},
  {path: 'create', component: CreateUpdateComponent},
  {path: 'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }