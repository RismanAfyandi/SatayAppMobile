import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodServiceProvider, Foods } from '../../providers/food-service/food-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private foods : Foods[] = [];
  
  constructor(public navCtrl: NavController, public foodService : FoodServiceProvider) {
  	this.foodService.getLatestFoods().subscribe((foods : Foods[])=>{
  		this.foods = foods;
  	});
  }  

  OrderFood(id)
  {
  	//Navigate to OrderFood
  	console.log(id);
  }

}
