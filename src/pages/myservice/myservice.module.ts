import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyservicePage } from './myservice';

@NgModule({
  declarations: [
    MyservicePage,
  ],
  imports: [
    IonicPageModule.forChild(MyservicePage),
  ],
})
export class MyservicePageModule {}
