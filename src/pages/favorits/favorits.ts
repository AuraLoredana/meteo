import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Item} from '../../models/item/item.interface';


/**
 * Generated class for the FavoritsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorits',
  templateUrl: 'favorits.html',
})
export class FavoritsPage {

  item = {} as Item;

  itemsRef$ : FirebaseListObservable<Item[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private database: AngularFireDatabase
  ) {
    this.itemsRef$ = this.database.list('items');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritsPage');
  }

    saveItem(item: Item) {
        console.log(item);


        const promise =  this.itemsRef$.push({
            itemName: item.itemName,
            itemDescription: item.itemDescription,
            itemNumber: Number(item.itemNumber),
        });
        promise
            .then(_ => {
                console.log('Added Item');
                this.item = {} as Item;
                this.navCtrl.pop();
            } )
            .catch(err => console.log(err, 'Error Adding Item'));



    }
}

