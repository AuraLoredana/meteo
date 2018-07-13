import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulletinmeteoPage } from './bulletinmeteo';

@NgModule({
  declarations: [
    BulletinmeteoPage,
  ],
  imports: [
    IonicPageModule.forChild(BulletinmeteoPage),
  ],
})
export class BulletinmeteoPageModule {}
