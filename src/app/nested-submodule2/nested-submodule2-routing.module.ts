import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedSubmodule2Component } from './nested-submodule2.component';

const routes: Routes = [{ path: '', component: NestedSubmodule2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedSubmodule2RoutingModule { }
