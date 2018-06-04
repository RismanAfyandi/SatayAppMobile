import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FoodServiceProvider, Foods } from '../../providers/food-service/food-service';
import { OrderFoodPage } from '../../pages/order_food/order_food';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private foods : Foods[] = [];
  
  constructor(public navCtrl: NavController,
              public foodService : FoodServiceProvider,
              public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
  	this.foodService.getLatestFoods().subscribe((foods : Foods[])=>{
  		this.foods = foods;
      loading.dismiss();
  	});
  }  

  OrderFood(id)
  {
    this.navCtrl.push(OrderFoodPage, {id: ""+id});
  }

}
