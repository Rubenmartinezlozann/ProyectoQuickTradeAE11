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
export class loginPage implements OnInit {

    Nombre: string
    constructor(private _usuariosService: UsuariosService) { }

    ngOnInit() {
        
    }

    
        
    
}
