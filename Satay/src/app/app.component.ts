import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FoodPage } from '../pages/food/food';
import { CartPage } from '../pages/cart/cart';
import { OrderFoodPage } from '../pages/order_food/order_food';
import { HistoryOrdersPage } from '../pages/history_orders/history_orders';
import { SettingsPage } from '../pages/settings/settings';
import { TermsAndConditionsPage } from '../pages/terms_and_conditions/terms_and_conditions';
//import { LogoutPage } from '../pages/logout/logout';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = OrderFoodPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Food', component: FoodPage },
      { title: 'Cart', component: CartPage },
      { title: 'HistoryOrders', component: HistoryOrdersPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'TermsAndConditions', component: TermsAndConditionsPage }
      //{ title: 'Logout', component: LogoutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
