import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

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

  ngOnInit() {
  }

}
