import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondViewRoutingModule } from './second-view-routing.module';
import { SecondViewComponent } from './second-view.component';


@NgModule({
  declarations: [
    SecondViewComponent
  ],
  imports: [
    CommonModule,
    SecondViewRoutingModule
  ]
})
export class SecondViewModule { }
