import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { DetailComponent } from './detail/detail.component';
import { ListingComponent } from './listing/listing.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateUpdateComponent, DetailComponent, ListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
