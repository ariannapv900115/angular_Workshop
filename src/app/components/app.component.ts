import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  recipes: MenuItem[] = [];

  ngOnInit(): void {
    this.recipes = [
      {
        name: 'Chiken',
        category: 'Dinner',
        price: 20,
      },
      {
        name: 'Eggs',
        category: 'Breakfast',
        price: 3,
      },
      {
        name: 'Scrimp',
        category: 'Dinner',
        price: 24,
      },
      {
        name: 'Optopus',
        category: 'Lunch',
        price: 30,
      },
      {
        name: 'Chiken BBQ',
        category: 'Dinner',
        price: 29,
      },
      {
        name: 'Eggs with Pork',
        category: 'Lunch',
        price: 32,
      },
      {
        name: 'Pork',
        category: 'Dinner',
        price: 28,
      },
      {
        name: 'Lobster',
        category: 'Dinner',
        price: 50,
      },
    ];
  }
}
