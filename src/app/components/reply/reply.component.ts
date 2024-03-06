import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { Invite } from 'src/app/model/Invite';
import { ApiService } from './../../api.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.sass'],
})
export class ReplyComponent implements OnInit, OnDestroy {
  name = new FormControl(undefined);
  response = new FormControl(1);
  drinks = new FormControl();

  @Input("invite")
  invite: Invite

  constructor(
    private apiService: ApiService
  ) {}

  onDestroy$ = new Subject();
  ngOnDestroy(): void {
    this.onDestroy$.next(undefined);
    this.onDestroy$.complete();
  }

  ngOnInit(): void {}

  sendResponse(invite1: Invite) {
    let invite: Invite = {
      id: invite1.id,
      greeting: '',
      guests: [
        {
          name: this.name.value,
          creationDate: new Date(),
          drinks: '',
          response: '',
        },
      ],
    };

    this.apiService
      .saveResponseGuest(invite)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((e) => {
        console.log('Thank you!!!');
      });
  }
}
