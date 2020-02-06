import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces';
import { ProductosService } from '../services/productos.service';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class MisProductosPage implements OnInit {


    Productos: IProducto[]
    claves: [];
    categoriaFiltro
    constructor(private _productosService: ProductosService, private _usuariosService: UsuariosService) { }

    ngOnInit() {
        this.Productos = [];
        let ref = this._productosService.getProductos();
        ref.once("value", snapshot => {
            snapshot.foreach(child => {
                let value = child.val();
                if (child.key == this._usuariosService.getClaveActual) {
                    this.Productos.push(value);
                    this.claves.push(child.key);
                }
            })
        })
    }

    Borrar(id: number) {
        var ref = this._productosService.getProductos();
        ref.orderbychild('Id').equalto(id).once('value', snapshot => {
            snapshot.forEach(child => {
                var value = child.key
                ref.child(value).remove()
            });
        })


    }
    onChange($event) {
        console.log($event.target.value);
        this.categoriaFiltro = $event.target.value;
    }
}
