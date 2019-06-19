import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-places-restaurant',
  templateUrl: './places-restaurant.page.html',
  styleUrls: ['./places-restaurant.page.scss']
})
export class PlacesRestaurantPage implements OnInit {
  places$: Observable<Menu[]>;
  constructor() {}

  ngOnInit(): void {
    this.places$ = of([
      {
        clientName: 'dheyme',
        waiterName: 'samara',
        order: 'peixe',
        chosen: false,
        orderTotal: '20'
      }
    ]);
  }
}
