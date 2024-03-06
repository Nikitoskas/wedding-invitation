import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass'],
})
export class AddressComponent implements OnInit {
  addressUrl: string =
    'https://yandex.ru/maps/213/moscow/?ll=37.436265%2C55.875916&mode=poi&poi%5Bpoint%5D=37.436409%2C55.875738&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D68521386079&z=19';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  goToUrl() {
    // this.apiService.saveResponse(undefined)
    window.open(this.addressUrl, '_blank');
  }
}
