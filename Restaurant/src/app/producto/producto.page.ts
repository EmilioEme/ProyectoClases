import { Component, OnInit } from '@angular/core';
import { ProductoServicioService} from './producto-servicio.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  private productos = []

  constructor(private servicioProductos : ProductoServicioService) { }

  ngOnInit() {
    this.productos = this.servicioProductos.getProductos()
  }

}
