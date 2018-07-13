import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { AddeventPage } from '../pages/addevent/addevent';

import { EditeventPage } from '../pages/editevent/editevent';
import { Calendar } from '@ionic-native/calendar';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { Device } from '@ionic-native/device';


@NgModule({
  declarations: [
    MyApp,
    EditeventPage,
    AddeventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditeventPage,
    AddeventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Calendar,
     LocalNotifications,
    Device
  ]
})
export class AppModule {}
