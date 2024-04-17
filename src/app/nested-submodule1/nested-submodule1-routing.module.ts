import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedSubmodule1Component } from './nested-submodule1.component';

const routes: Routes = [{ path: '', component: NestedSubmodule1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedSubmodule1RoutingModule { }
