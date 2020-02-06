import { Component } from '@angular/core';
import { IProducto } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductosService } from '../services/productos.service';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    Usuario:string
    claves: [];

    constructor(private _ToastController: ToastController, private _productosService: ProductosService, private _usuariosService: UsuariosService, private _activatedRoute: ActivatedRoute, private _db: AngularFireDatabase) { }

    ngOnInit() {
        this.Usuario = this._activatedRoute.snapshot.paramMap.get('Nombre');
        this._usuariosService.setUsuarioActual(this.Usuario)
    }
}