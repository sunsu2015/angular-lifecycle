import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoCheckExampleComponent } from './do-check-example.component';

const routes: Routes = [
  {path: '', component: DoCheckExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoCheckExampleRoutingModule { }
