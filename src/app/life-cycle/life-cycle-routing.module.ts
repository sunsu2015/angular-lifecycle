import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleComponent } from './life-cycle.component';

const routes: Routes = [
  {path: '', component: LifeCycleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleRoutingModule { }
