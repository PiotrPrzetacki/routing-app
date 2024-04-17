import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondViewComponent } from './second-view.component';

const routes: Routes = [
  { path: '', component: SecondViewComponent,
    children: [
      { path: 'inner1', loadChildren: () => import('../nested-submodule1/nested-submodule1.module').then(m => m.NestedSubmodule1Module) },
      { path: 'inner2', loadChildren: () => import('../nested-submodule2/nested-submodule2.module').then(m => m.NestedSubmodule2Module) }

    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondViewRoutingModule { }
