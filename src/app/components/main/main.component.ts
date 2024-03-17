import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, interval, switchMap, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { FlowItem } from './model/FlowItem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('container', { static: true })
  containerElem: ElementRef<HTMLDivElement>;

  margin = 200;

  @ViewChildren('flowElements') flowElements: QueryList<
    ElementRef<HTMLDivElement>
  >;

  flows: FlowItem[];

  public readonly invite$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => {
      debugger;
      return this.apiService.getGuest(params.get('id'));
    })
  );

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  onDestroy$ = new Subject();
  ngOnDestroy(): void {
    this.onDestroy$.next(undefined);
    this.onDestroy$.complete();
  }

  ngAfterViewInit(): void {
    this.initFlows();

    interval(200)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((e) => {
        this.flows.forEach((elem) => {
          this.changeFlow(elem);
          // console.log(this.containerElem);
        });
      });
  }

  ngOnInit(): void {
  }

  randomInt = (max: number): number => {
    return Math.ceil(Math.random() * max);
  };

  random = (max: number): number => {
    return Math.random() * max;
  };

  randomInRangeS(n: number) {
    return this.randomInRange(-n,n);
  }

  randomInRange(start: number, end: number) {
    return Math.floor(Math.random() * (end - start)) + start;
  }

  variateBoolean = (percent: number): boolean => {
    return this.randomInt(100) <= percent;
  };

  changeFlow(item: FlowItem) {
    let elem = this.flowElements.find((e) => e.nativeElement.id === "flow_" + item.id);

    if(this.checkOverlap(elem.nativeElement)){
      item.left += item.leftSpeed //+ this.random(1);
      item.top += item.topSpeed //+ this.random(1);
      item.rotate += item.rotateSpeed //+ this.randomInRangeS(2);
      // if (this.variateBoolean(50)) item.size += 5 + this.randomInt(5);
      // else item.size -= 5 + this.randomInt(5);

      if(this.variateBoolean(1))
        item.isVisible = !item.isVisible
    } else {
      this.reInitFlow(item)
    }

    item.buildStyle();
  }

  checkOverlap(flow: HTMLDivElement): boolean {
    const flowRect = flow.getBoundingClientRect();
    const containerRect =
      this.containerElem.nativeElement.getBoundingClientRect();
    if (
      flowRect.right > containerRect.left - this.margin &&
      flowRect.left < containerRect.right + this.margin &&
      flowRect.bottom > containerRect.top - this.margin &&
      flowRect.top < containerRect.bottom + this.margin
    ) {
      return true;
    } else {
      return false;
    }
  }

  initFlows() {
    this.flows = [];



    let count = 30;
    for (let i = 0; i < count; i++) {
      let item = this.setInitValues(i);
      item.buildStyle();

      this.flows.push(item);
    }
  }

  setInitValues(id: number): FlowItem{
    const containerRect =
      this.containerElem.nativeElement.getBoundingClientRect();

    let item = new FlowItem();

    item.id = id;

    item.top = this.randomInRange(0 - this.margin, containerRect.bottom - containerRect.top + this.margin);
    item.left = this.randomInRange(0 - this.margin, containerRect.right - containerRect.left + this.margin);

    item.leftSpeed = 0//this.randomInRangeS(2);
    item.topSpeed = 10 + this.randomInRangeS(5);
    item.rotate = this.randomInRangeS(180);
    item.rotateSpeed = this.randomInRangeS(5);
    // item.size = 100;
    item.isVisible = false;

    return item
  }

  reInitFlow(old: FlowItem){
    debugger
    this.flows.splice(this.flows.indexOf(old), 1)

    let item = this.setInitValues(old.id);
    item.buildStyle();

    this.flows.push(item)
  }
}
