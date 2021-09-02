import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/productos';
import { ProductDataService } from '../../Servicios/product-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos: Producto[] | undefined;
  error: string | undefined;
  loading = true;
  constructor(private productService: ProductDataService) {}

  ngOnInit(): void {
    this.getProductDataFromService();
  }

  getProductDataFromService() {
    this.productService.getProductData().subscribe((data) => {
      this.productos = data;
      this.loading = false;
    });
  }
}
