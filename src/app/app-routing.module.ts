import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'example',
    children: [
      {
        path: 'lifecycle',
        loadChildren: () => import('./life-cycle/life-cycle.module').then(m => m.LifeCycleModule)
      },
      {
        path: 'do-check',
        loadChildren: () => import('./do-check-example/do-check-example.module').then(m => m.DoCheckExampleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
