import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces';
import { ProductosService } from '../services/productos.service';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
    selector: 'app-editar-producto',
    templateUrl: './editar-producto.page.html',
    styleUrls: ['./editar-producto.page.scss'],
})
export class EditarProductoPage implements OnInit {

    clave
    id: number
    Nombre: number
    Descripcion: string = "";
    Categoria: number = 2;
    Precio: number
    Estado: string
    MetrosCuadrados: number
    NumeroDeBanyos: number
    NumeroDeHabitaciones: number
    Localidad: string
    Vehiculo: string
    Km: number
    Anyo: number
    Producto: IProducto
    
    constructor(private _db: AngularFireDatabase, private _usuariosService: UsuariosService, private _productosService: ProductosService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.clave = +this._activatedRoute.snapshot.paramMap.get('id');
        this.Producto = this._productosService.getProducto(this.clave);
    }

    Modificar() {
        let ref = this._db.database.ref("Productos");
        ref.child(this.clave).set({
            Nombre: this.Nombre,
            Descripcion: this.Nombre,
            Categoria: this.Descripcion,
            Precio: this.Precio,
            Estado: this.Estado,
            MetrosCuadrados: this.MetrosCuadrados,
            NumeroDeBanyos: this.NumeroDeBanyos,
            NumeroDeHabitaciones: this.NumeroDeHabitaciones,
            Localidad: this.Localidad,
            Vehiculo: this.Vehiculo,
            Km: this.Km,
            Anyo: this.Anyo,
        });
    }
};



