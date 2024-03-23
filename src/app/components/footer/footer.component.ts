import { Invite } from './../../model/Invite';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Input('invite')
  invite: Invite;

  constructor() { }

  ngOnInit(): void {
  }

}
