import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { LifeCycleComponent } from './life-cycle.component';
import { OnChangesModule } from '../on-changes/on-changes.module';


@NgModule({
  declarations: [LifeCycleComponent],
  imports: [
    CommonModule,
    LifeCycleRoutingModule,
    OnChangesModule
  ]
})
export class LifeCycleModule { }
