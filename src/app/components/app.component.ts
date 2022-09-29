import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];

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
    ];
  }
}
