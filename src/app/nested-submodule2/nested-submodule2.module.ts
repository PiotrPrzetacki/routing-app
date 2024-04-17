import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedSubmodule2RoutingModule } from './nested-submodule2-routing.module';
import { NestedSubmodule2Component } from './nested-submodule2.component';


@NgModule({
  declarations: [
    NestedSubmodule2Component
  ],
  imports: [
    CommonModule,
    NestedSubmodule2RoutingModule
  ]
})
export class NestedSubmodule2Module { }
