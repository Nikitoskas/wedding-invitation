import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public readonly invite$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => {
      debugger
      return this.apiService.getGuest(params.get('id'))
    })
  );

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

}
