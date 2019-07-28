import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SiteMapComponent } from './site-map/site-map.component';


@NgModule({
  declarations: [WelcomeComponent, SiteMapComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
