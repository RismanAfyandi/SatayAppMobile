import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

/*
  Generated class for the FoodServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodServiceProvider {

  baseUrl=' http://private-90854b-satay.apiary-mock.com';
  constructor(public http: HttpClient) {
  }

  getLatestFoods():Observable<Foods[]>
  {
  	return this.http
  		.get<Foods[]>(this.baseUrl +'/getLatestFoods',
  		{headers: new HttpHeaders().set('token', '1231321')})
  		.map(foods=>{
  			return foods.map((food)=> new Foods(food));
  		})
  		.catch((err)=>{
  			console.log(err);
  			return Observable.throw(err);
  		});
  }
  getFoods(search: string):Observable<Foods[]>
  {
  	return this.http
  		.get<Foods[]>(this.baseUrl +'/getFoods/  '+search)
  		.map(foods=>{
  			return foods.map((food)=> new Foods(food));
  		})
  		.catch((err)=>{
  			console.log(err);
  			return Observable.throw(err);
  		});
  }

}

  export class Foods {
   id: number;
   name: string;
   price: number;
   image: string;
   constructor(values: Object = {}) {
        Object.assign(this, values);
   	}
 }
