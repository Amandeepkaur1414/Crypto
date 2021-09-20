import { Component } from '@angular/core';
import { NetworkService, ConnectionStatus } from './services/network.service';
import { CryptoServiceService } from '../services/crypto-service.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cryptoServiceService: CryptoServiceService,
    private networkService: NetworkService) {
      this.initializeApp();
    }
    initializeApp(){
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
   
        this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
          if (status == ConnectionStatus.Offline) {
            let data = status == 1? true:false;
            this.cryptoServiceService.setSyncDataFlag(data);
          }else{
            console.log("online")
          }
        });
      });
    }
}
