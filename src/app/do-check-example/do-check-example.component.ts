/**
 * 所有的组件实例化是都经历了两轮变换检测？
 * ChangeDetectorRef是变化检测引用
 * 其中的detach方法从变更检测树中分离当前视图。 已分离的视图在重新附加上去之前不会被检查。
 * detectChanges方法可以使被分离的视图进行变化检测从而重新渲染
 * 所以当如果注释掉this.changeDetector.detectChanges();方法，页面也不会有任何变化
 * reattach方法使被分离的视图重新附加到变更检测树
 * 
 * changeDetection：ChangeDetectionStrategy.OnPush
 * 这个设置可以使默认的变更检测失效，只有调用this.changeDetector.markForCheck()时才会触发变更检测
 * 
 * 
 * checkNoChanges方法使组件发生变更检测时报错， 不太清楚应用的场景是什么 
 * */ 
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-example',
  template: `
    <h1>ngDoCheck Example</h1>
    <p>DATA: {{ data[data.length - 1] }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
// 对于template中有一个发现，就是如果一个原生标签包含了模板表达式，
// 那么这个标签对应的视图整体会附加到变更检测树上。
// 所以当DATA: {{ data[data.length - 1] }}都包含在p标签中时，
// 如果调用了this.changeDetector.detach()，则整体不会被检测，不会被渲染
export class DoCheckExampleComponent implements OnInit, DoCheck {
  lifecycleTicks: number = 0;
  oldTheData: string;
  data: string[] = ['initial'];
  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    // this.changeDetector.checkNoChanges();
    // this.changeDetector.detach();
    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      // this.changeDetector.markForCheck();
    }, 6000);
    setTimeout(() =>{
      // this.changeDetector.reattach();
    }, 9000);
    // setInterval(() => {
    //   this.changeDetector.markForCheck();
    // }, 2000);
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);
    console.log(this.data[this.data.length - 1], this.oldTheData)
    if (this.data[this.data.length - 1] !== this.oldTheData) {
      // this.changeDetector.detectChanges();
    }
  }

}
