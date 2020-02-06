import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces';
import { ProductosService } from '../services/productos.service';
import { UsuariosService } from '../services/usuarios.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.page.html',
  styleUrls: ['./ver-productos.page.scss'],
})
export class VerProductosPage implements OnInit {

    Productos :IProducto[]
    claves: [];
    constructor(private _productosService: ProductosService, private _usuariosService: UsuariosService, private _ToastController: ToastController,) { }

    ngOnInit() {
        let ref = this._productosService.getProductos();
        ref.once("value", snapshot => {
            snapshot.foreach(child => {
                let value = child.val();
                this.Productos.push(value);
                this.claves.push(child.key);
            })
        })
    }
}
