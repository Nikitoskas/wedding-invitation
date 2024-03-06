import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Invite } from './model/Invite';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  saveResponseGuest(invite: Invite): Observable<Invite> {
    return this.httpClient.patch<Invite>(`/guests`, invite);
  }

  getGuest(id: string): Observable<Invite> {
    return this.httpClient.get<Invite>(`/guests/${id}`);
  }
}
