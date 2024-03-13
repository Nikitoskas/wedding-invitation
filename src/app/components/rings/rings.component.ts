import { Subject, interval, takeUntil } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.sass']
})
export class RingsComponent implements OnInit, OnDestroy {

  rotateLeft: number = 0
  rotateRight: number = 0
  step: number = 3

  constructor() { }

  ngOnInit() {
    interval(200)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(e => {
      this.rotateLeft = (this.rotateLeft + this.step)
      this.rotateRight = (this.rotateRight - this.step)
    })
  }

  onDestroy$ = new Subject();
  ngOnDestroy(): void {
    this.onDestroy$.next(undefined);
    this.onDestroy$.complete();
  }



}
