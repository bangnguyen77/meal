import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Trackers</h1>
      <meal-list [mealList]="meals">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];

  constructor() {
    this.meals = [
      new Meal('Breakfast', 'Subway', 100, 0),
      new Meal('Lunch', 'McDonald', 200, 0),
      new Meal('Dinner', 'KFC', 600, 0),
      new Meal('Supper', 'BurgerKing', 700, 0),
    ]
  }
}
