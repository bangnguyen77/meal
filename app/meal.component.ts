import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <h3>{{ meal.name }}</h3>
      <p>{{ meal.calories }}<p>
      <p>{{ meal.details }}<p>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
