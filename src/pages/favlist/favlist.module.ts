import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavlistPage } from './favlist';

@NgModule({
  declarations: [
    FavlistPage,
  ],
  imports: [
    IonicPageModule.forChild(FavlistPage),
  ],
})
export class FavlistPageModule {}
