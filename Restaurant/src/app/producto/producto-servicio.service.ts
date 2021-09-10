import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {

  private productos = [{
    id : "1",
    titulo : "pollo asado",
    url : "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2010/03/pollo-asado-citricos-1920.jpg"
  },
  {
    id : "2",
    titulo : "completo",
    url : "https://www.maxionline.ec/wp-content/uploads/2021/05/hot-dog-chile-menu.jpg"
  }]

  constructor() { }

  //Mantenedor

  getProductos()
  {
    return [...this.productos]
  }

  getProductosById(productoID : string)
  {
    this.productos.find( serv => {
      return serv.id === productoID
    })
  }

  addProductos(Titulo : string, Url : string)
  {
    this.productos.push({
      id : (this.productos.length + 1).toString(),
      titulo : Titulo,
      url : Url
    })
  }

  deleteProductos(productoID : string)
  {
    this.productos = this.productos.filter(serv => {
      return serv.id !== productoID
    })
  }
}
