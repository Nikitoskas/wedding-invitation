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
      text: 'Просим взять с собой хорошее настроение и свои улыбки',
    },
    {
      time: '16:00',
      svg: 'wedding-couple',
      title: 'Свадебная церемония',
      text: 'На всякий случай приготовьте носовые платочки для трогательного момента',
    },
    {
      time: '16:30',
      svg: 'dish',
      title: 'Праздничный банкет',
      text: 'Время вкусной еды, танцев и развлечений',
    },
    {
      time: '22:00',
      svg: 'just-married',
      title: 'Окончание мероприятия',
      text: 'К сожалению, даже такой прекрасный вечер может закончиться',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
