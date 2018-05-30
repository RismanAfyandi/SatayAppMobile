import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FoodPage } from '../pages/food/food';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from '../pages/checkout/checkout';
import { HistoryOrdersPage } from '../pages/history_orders/history_orders';
import { SettingsPage } from '../pages/settings/settings';
import { TermsAndConditionsPage } from '../pages/terms_and_conditions/terms_and_conditions';
import { LogoutPage } from '../pages/logout/logout';
import { OrderFoodPage } from '../pages/order_food/order_food';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodServiceProvider } from '../providers/food-service/food-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FoodPage,
    CartPage,
    CheckoutPage,
    HistoryOrdersPage,
    SettingsPage,
    TermsAndConditionsPage,
    LogoutPage,
    OrderFoodPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FoodPage,
    CartPage,
    CheckoutPage,
    HistoryOrdersPage,
    SettingsPage,
    TermsAndConditionsPage,
    LogoutPage,
    OrderFoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodServiceProvider
  ]
})
export class AppModule {}
