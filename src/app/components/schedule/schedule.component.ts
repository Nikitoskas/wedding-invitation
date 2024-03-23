import { Component, OnInit } from '@angular/core';

interface ScheduleItem {
  time: string;
  svg: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass'],
})
export class ScheduleComponent implements OnInit {
  items: ScheduleItem[] = [
    {
      time: '15:00',
      svg: 'wedding-location',
      title: 'Сбор гостей',
      text: 'Парад гостей можно считать открытым',
    },
    {
      time: '16:00',
      svg: 'wedding-couple',
      title: 'Время Х - Свадебная церемония',
      text: 'Девушки, не забудьте с собой платочки для трогательного момента. Парни, не забудьте быть рядом с девушками в этот момент',
    },
    {
      time: '17:00',
      svg: 'dish',
      title: 'Праздничный банкет',
      text: 'Пора начинать танцы и развлечения, ради которых и ходят на свадьбу. Не переживайте, поесть Вы тоже успеете. \nХотя…',
    },
    {
      time: '22:00',
      svg: 'just-married',
      title: 'Окончание мероприятия',
      text: 'Последние фотографии и эмоции в копилку ваших воспоминаний',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
