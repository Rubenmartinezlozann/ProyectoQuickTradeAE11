import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { IProducto } from '../interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

    Id
    Producto: IProducto

    constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductosService) { }

    ngOnInit() {
        this.Id = +this._activatedRoute.snapshot.paramMap.get('id');
        this.Producto=this._productosService.getProducto(this.Id)
    }

}
