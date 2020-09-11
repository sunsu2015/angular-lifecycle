import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoCheckExampleRoutingModule } from './do-check-example-routing.module';
import { DoCheckExampleComponent } from './do-check-example.component';


@NgModule({
  declarations: [DoCheckExampleComponent],
  imports: [
    CommonModule,
    DoCheckExampleRoutingModule
  ]
})
export class DoCheckExampleModule { }
