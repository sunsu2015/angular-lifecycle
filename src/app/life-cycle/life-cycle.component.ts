import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked, SimpleChanges, Input } from '@angular/core';
/**
 * 父级即使设置了输入属性（即本例中的val），且将其改变，也不会触发ngOnChanges方法，同时angular不建议将DoCheck和OnChange同时实现
 * 组件中ngOnChanges会在构造函数执行后执行
 * 然后是OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
 * 父先构造，然后子构造
 * 然后父执行OnInit, DoCheck, AfterContentInit, AfterContentChecked
 * 然后子执行Onchange, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
 * 然后父执行AfterViewInit, AfterViewChecked
 * 之后按照这个规律执行(Onchange子才执行), DoCheck, AfterContentChecked, AfterViewChecked
 * 即子的 AfterViewInit, AfterViewChecked要先于父的
 * */ 
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent
implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{
  @Input() val: string;
  constructor() {
    console.log('parent-constructor');
  }

  ngOnInit(): void {
    console.log('parent-OnInit');
    setInterval(() => {
      this.val = Math.random().toString();
    }, 20000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent-OnChanges');
  }

  ngDoCheck(): void{
    console.log('parent-DoCheck');
  }

  ngAfterViewInit(): void {
    console.log('parent-AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('parent-AfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('parent-AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('parent-AfterContentChecked');
  }
}
