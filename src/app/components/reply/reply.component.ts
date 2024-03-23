import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Invite } from 'src/app/model/Invite';
import { ApiService } from '../../service/api.service';
import { OverlayService } from './../../service/overlay.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.sass'],
})
export class ReplyComponent implements OnInit, OnDestroy {
  name = new FormControl(undefined, [Validators.required]);
  response = new FormControl(undefined, [Validators.required]);

  responseElems: string[] = ['Я приду', 'Я не приду'];
  drinksElems = [
    'Вино сладкое/полусладкое',
    'Вино сухое/полусухое',
    'Виски или иной крепкий алкоголь',
    'Водка',
    'Я за ЗОЖ',
  ].map((e) => {
    return {
      label: e,
      value: false,
    };
  });

  @Input('invite')
  invite: Invite;

  constructor(
    private apiService: ApiService,
    private overlayService: OverlayService
  ) {}

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
      many: this.invite.many,
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
        let text = 'Спасибо за ответ';
        if (this.response.value === this.responseElems[0])
          text = 'Продолжение следует...';
        else if (this.response.value === this.responseElems[1])
          text = 'Ой... У тебя еще есть время передумать';

        this.resetForm();
        this.overlayService.open(text);
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

  resetForm() {
    this.drinksElems.forEach((e) => (e.value = false));
    this.name.setValue(undefined);
    this.response.setValue(undefined);
  }
}
