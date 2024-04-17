import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedSubmodule1RoutingModule } from './nested-submodule1-routing.module';
import { NestedSubmodule1Component } from './nested-submodule1.component';


@NgModule({
  declarations: [
    NestedSubmodule1Component
  ],
  imports: [
    CommonModule,
    NestedSubmodule1RoutingModule
  ]
})
export class NestedSubmodule1Module { }
