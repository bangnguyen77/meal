import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  pipes: [CaloriesPipe],
  template: `
    <select (change)="onCaloriesChange($event.target.value)">
      <option value="all">View All Meals</option>
      <option value="high">View High Calories Meals</option>
      <option value="Low">View Low Calories Meals</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | calories:caloriesFilter"
      [meal]="currentMeal" (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal">
    </meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public caloriesFilter: string = "all";

  mealClicked(meal: Meal): void {
    this.selectedMeal = meal;
  }

  onCaloriesChange(filterOption) {
    this.caloriesFilter = filterOption;
  }
}
