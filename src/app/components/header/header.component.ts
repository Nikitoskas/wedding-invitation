import { Invite } from './../../model/Invite';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input('invite')
  invite: Invite;

  constructor() { }

  ngOnInit(): void {
  }

}
