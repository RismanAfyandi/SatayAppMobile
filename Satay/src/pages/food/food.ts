import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodServiceProvider, Foods } from '../../providers/food-service/food-service';

@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {
  private foods : Foods[] = [];

  constructor(public navCtrl: NavController, public foodService : FoodServiceProvider) {
  	this.foodService.getFoods("1").subscribe((foods : Foods[])=>{
  		this.foods = foods;
  		console.log(foods);
  	});
  }

  OrderFood(id)
  {
  	//Navigate to OrderFood
  	console.log(id);
  }

}
