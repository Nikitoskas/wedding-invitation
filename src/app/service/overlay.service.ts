import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  openOverlay$ = new Subject<string>();

  constructor() {}

  open(text: string) {
    this.openOverlay$.next(text)
  }

}
