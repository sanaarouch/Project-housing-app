import { Injectable } from '@angular/core';
import { Lieu } from './lieux.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LieuxService {

  constructor(private http:HttpClient) { }

  private _lieux : Lieu[] = [
    new Lieu(
      'l1',
      'Studio à Paris',
      'Studio neuf entièrement rénové.',
      'assets/icon/1.jpg',
      690
    ),
    new Lieu(
      'l2',
      "Studio neuf dans le 9ième",
      'Studio équipé confortable!',
      'assets/icon/2.jpg',
      850
    ),
    new Lieu(
      'l3',
      'Apprt 2 pièces à Clichy',
      'Un grand appartement pour vos visites à Paris !',
      'assets/icon/3.jpg',
      1100
    )
  ];

  get lieux() {
    return [...this._lieux];
  }

  avoirLieu(id: string) {
    return {...this._lieux.find(l => l.id === id)};
  }
}
