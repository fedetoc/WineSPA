//////////////////////////PAGINAS///////////////////////////////
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { RegistroComponent } from './Pages/registro/registro.component';

//////////////////////////MODULOS PROPIOS//////////////////////
import { TopbarComponent } from './Menu/topbar/topbar.component';
import { SidenavComponent } from './Menu/sidenav/sidenav.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { InputComponent } from './Components/input/input.component';
import { LoadingComponent } from './Components/loading/loading.component';

/////////////////////////ANGULAR MATERIAL///////////////////////
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/////////////////////////MODULOS ANGULAR/////////////////////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/////////////////FIREBASE VERSION DE COMPATIBILIDAD//////////////////////
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAnalytics,
  AngularFireAnalyticsModule,
} from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
////////NUEVA ACTUALIZACION DE FIREBASE/////////////7
/*import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
} from '@angular/fire/firestore'; */
///////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidenavComponent,
    ProductCardComponent,
    HomeComponent,
    LoadingComponent,
    RegistroComponent,
    InputComponent,
    DetalleComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
