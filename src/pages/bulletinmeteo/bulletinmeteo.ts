import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as io from 'socket.io-client';

/**
 * Generated class for the BulletinmeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bulletinmeteo',
  templateUrl: 'bulletinmeteo.html',
})
export class BulletinmeteoPage {



constructor(public navCtrl: NavController) {

  
  }

   goToAddAbonItemPage() {
    console.log("Working");
        this.navCtrl.push('AbonamentPage');
}



     }