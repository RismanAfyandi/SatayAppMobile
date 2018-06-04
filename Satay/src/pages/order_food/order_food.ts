import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FoodServiceProvider, FoodDetail } from '../../providers/food-service/food-service';

@Component({
  selector: 'page-order_food',
  templateUrl: 'order_food.html'
})
export class OrderFoodPage {
  private fooddetail : FoodDetail = new FoodDetail();

  constructor(public navCtrl: NavController, 
  			  private navParams: NavParams, 
  			  public foodService : FoodServiceProvider,
  			  public loadingCtrl: LoadingController) {

    let fooddetail = new FoodDetail();
  	let loading = this.loadingCtrl.create({
  	  content: 'Please wait...'
  	});
  	loading.present();
    let id = navParams.get('id');
    console.log("Nilai id =" + id);
    this.foodService.getFood(id).subscribe((fooddetail : FoodDetail)=>{
  	   	this.fooddetail = fooddetail;
  		console.log(fooddetail.name);
  		loading.dismiss();
    });

  }
}
