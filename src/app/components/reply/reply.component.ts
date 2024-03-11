import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Invite } from 'src/app/model/Invite';
import { ApiService } from './../../api.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.sass'],
})
export class ReplyComponent implements OnInit, OnDestroy {
  name = new FormControl(undefined, [Validators.required]);
  response = new FormControl(undefined, [Validators.required]);

  responseElems: string[] = ['Я приду', 'Затрудняюсь ответить', 'Я не приду'];
  drinksElems = [
    'Вино',
    'Виски',
    'Водка',
    'Шампанское',
    'Что-нибудь безалкогольное',
  ].map((e) => {
    return {
      label: e,
      value: false,
    };
  });

  @Input('invite')
  invite: Invite;

  constructor(private apiService: ApiService) {}

  onDestroy$ = new Subject();
  ngOnDestroy(): void {
    this.onDestroy$.next(undefined);
    this.onDestroy$.complete();
  }

  ngOnInit(): void {}

  sendResponse() {
    if (!this.response.valid || !this.name.valid) return;

    let invite: Invite = {
      id: this.invite.id,
      greeting: '',
      guests: [
        {
          name: this.name.value,
          creationDate: new Date(),
          drinks: this.drinksElems
            .filter((e) => e.value)
            .map((e) => e.label)
            .join(', '),
          response: this.response.value,
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

  checkBox(
    elem: {
      label: string;
      value: boolean;
    },
    ch: boolean
  ) {
    elem.value = ch;
  }
}
