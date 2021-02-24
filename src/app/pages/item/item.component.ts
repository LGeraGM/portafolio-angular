import { ProductoDescripcion } from './../../interfaces/producto-descripcion.interface';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  producto: ProductoDescripcion | undefined;
  id: string | undefined;
  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      //console.log(parametros['id']);

      this.productoService.getProducto(parametros['id'])
        .subscribe((producto: any) => {
          this.id=parametros['id'];
          this.producto = producto;
         // console.log(producto);
        });
    });
  }

}
