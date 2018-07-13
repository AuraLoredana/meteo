import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { Device } from '@ionic-native/device';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
 data = { title:'', description:'', date:'', time:'' }
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController,
    private device: Device
   ) {
  console.log('Device UUID is: ' + this.device.uuid);
    
    let alert2 = this.alertCtrl.create({
      title: 'Device',
      subTitle: "UUID: " + this.device.uuid,
      buttons: ['OK']
    });
    alert2.present();
    
  }
  
  submit() {

    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       trigger: {
         at: date
       },
       led: 'FF0000',
       sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
  }   

}

