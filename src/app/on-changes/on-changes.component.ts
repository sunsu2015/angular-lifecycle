import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent
  implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {
  @Input() val: string;
  constructor() {
    console.log('child-constructor');
  }

  ngOnInit(): void {
    console.log('child-ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child-ngOnChanges', changes);
  }

  ngAfterContentInit(): void {
    console.log('child-ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('child-ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('child-ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('child-ngAfterViewChecked');
  }

  ngDoCheck(): void {
    console.log('child-ngDoCheck')
  }
}
