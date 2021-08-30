import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './Menu/topbar/topbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidenavComponent } from './Menu/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
/////////////////VERSION DE COMPATIBILIDAD////////////////
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAnalytics,
  AngularFireAnalyticsModule,
} from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoadingComponent } from './loading/loading.component';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './registro/registro.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
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
