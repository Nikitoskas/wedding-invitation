import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit, OnDestroy{

  day: number = 0;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  wedDay = new Date(2024, 5, 10, 16, 0, 0)

  onDestroy$ = new Subject()

  constructor() { }

  ngOnDestroy(): void {
    this.onDestroy$.next(undefined)
    this.onDestroy$.complete()
  }

  ngOnInit(): void {
    interval(1000)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(() => {
      let diff = this.wedDay.getTime() - new Date().getTime()

      let _second = 1000
      let _minute = _second*60
      let _hour = _minute*60
      let _day = _hour*24

      this.day = Math.floor(diff / _day)
      diff = diff % _day

      this.hour = Math.floor(diff / _hour)
      diff = diff % _hour

      this.minute = Math.floor(diff / _minute)
      diff = diff % _minute

      this.second = Math.floor(diff / _second)
      diff = diff % _second
    })
  }

}
