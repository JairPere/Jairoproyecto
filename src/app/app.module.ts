import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './Pages/admin/admin.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging'; // Asegúrate de la ruta correcta
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    AdminModule // Importa aquí el módulo de Admin
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"climaapps","appId":"1:501241458768:web:5c75d5692ceb0870052155","storageBucket":"climaapps.firebasestorage.app","apiKey":"AIzaSyAGi_3yUJvmrgEE39W2DGvNa6pUKSeKiU4","authDomain":"climaapps.firebaseapp.com","messagingSenderId":"501241458768","measurementId":"G-1F5636V8PM"})), provideMessaging(() => getMessaging())],
  bootstrap: [AppComponent],
})
export class AppModule { }

