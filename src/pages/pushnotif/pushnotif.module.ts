import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushnotifPage } from './pushnotif';

@NgModule({
  declarations: [
    PushnotifPage,
  ],
  imports: [
    IonicPageModule.forChild(PushnotifPage),
  ],
})
export class PushnotifPageModule {}
