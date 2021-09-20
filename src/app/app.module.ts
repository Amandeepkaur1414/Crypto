import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from "@angular/http";
import {CryptoServiceService  } from "../services/crypto-service.service";
import { LoadingController } from '@ionic/angular';
import { Chart } from "chart.js";
import {IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
 import { NetworkService } from "../app/services/network.service";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Http, Headers } from "@angular/http";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
// import {HomePage  } from "../app/home/home.page";
// import {DetailsComponent  } from "../app/details/details.component";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpModule,IonicStorageModule.forRoot(),
    HttpClientModule],
  providers: [ SplashScreen,
    StatusBar,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CryptoServiceService,LoadingController,Network,NetworkService,
    Http,
    SQLite],
  bootstrap: [AppComponent],
})
export class AppModule {}
