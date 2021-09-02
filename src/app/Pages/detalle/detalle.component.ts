import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos';
import { ProductDataService } from 'src/app/Servicios/product-data.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  producto: Producto | undefined;
  loading = true;
  constructor(
    private prodService: ProductDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) =>
      this.getProductDataById(param['id'])
    );
  }

  getProductDataById(id: string): void {
    this.prodService.getProductData().subscribe((data: Producto[]) => {
      this.producto = data.find((el) => el.id === id);
      this.loading = false;
    });
  }
}
