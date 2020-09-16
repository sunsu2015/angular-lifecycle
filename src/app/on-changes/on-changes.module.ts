import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnChangesComponent } from './on-changes.component';



@NgModule({
  declarations: [OnChangesComponent],
  imports: [
    CommonModule
  ],
  exports: [OnChangesComponent]
})
export class OnChangesModule { }
