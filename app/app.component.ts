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
      new Meal('test-name', 100, 'test-details', 0),
      new Meal('test-name2', 200, 'test-details2', 0),
      new Meal('test-name3', 600, 'test-details3', 0),
      new Meal('test-name4', 700, 'test-details4', 0),
    ]
  }
}
