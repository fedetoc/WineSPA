import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private dataOb: Observable<Producto[]>;
  constructor(public firestore: AngularFirestore) {
    const objId = { idField: 'id' };
    this.dataOb = <Observable<Producto[]>>(
      this.firestore.collection('productos').valueChanges(objId)
    );
  }
  getProductData(): Observable<Producto[]> {
    return this.dataOb;
  }
  /*getData() {
    this.http.get<Producto>();
  }*/
  /*getData(): Producto[] {
    return [
      {
        id: 1,
        item: 'Zapatos de Mujer',
        price: 20000,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribu laudantium',
        location: 'Capital Federal, Buenos Aires',
        categoria: 'zapatos',
      },
      {
        id: 2,
        item: 'Zapatos de Hombre',
        price: 30000,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribus laudantium',
        location: 'Capital Federal, Buenos Aires',
        categoria: 'zapatos',
      },
      {
        id: 3,
        item: 'Cartera de Hombre',
        price: 50000,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribus laudantium',
        location: 'Capital Federal, Buenos Aires',
        categoria: 'zapatos',
      },
    ];
  }*/
}
