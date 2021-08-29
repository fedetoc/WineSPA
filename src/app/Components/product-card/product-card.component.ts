import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() producto: Producto = {
    price: 0,
    description: '',
    location: '',
    item: '',
    categoria: '',
    image: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
