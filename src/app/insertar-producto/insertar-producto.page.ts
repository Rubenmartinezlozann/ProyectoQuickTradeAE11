import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductosService } from '../services/productos.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.page.html',
  styleUrls: ['./insertar-producto.page.scss'],
})
export class InsertarProductoPage implements OnInit {
    TextoNombre: string = "Nombre";
    TextoCategoria: string = "Categoria";
    TextoDescripcion: string = "Descripcion";
    TextoVehiculo: string = "Vehiculo";
    TextoKm: string = "Km";
    TextoAnyo: string = "Anyo";
    TextoMetrosCuadrados: string = "Metros cuadrados";
    TextoNumeroDeBanyos: string = "Numero de banyos";
    TextoNumeroDeHabitaciones: string = "Numero de habitaciones";
    TextoLocalidad: string = "Localidad";
    TextoEstado: string = "Estado";
    TextoPrecio: string = "Precio";

    id: number = 0
    Nombre: number
    Descripcion: string = "";
    Categoria: number = 2;
    SCategoria: string;
    Precio: number
    Estado: string
    MetrosCuadrados: number
    NumeroDeBanyos: number
    NumeroDeHabitaciones: number
    Localidad: string
    Vehiculo: string
    Km: number
    Anyo: number
    Productos: IProducto[]

    constructor(private _ToastController: ToastController, private _productosService: ProductosService, private _UsuariosService: UsuariosService) { }

    ngOnInit() {
        this.Productos = this._productosService.getProductos();
    }
    async presentToast() {
        const toast = await this._ToastController.create({
            message: 'Producto guardado correctamente',
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    }

    CambiarCategoria(categoria): void {
        this.Categoria = categoria;
    }

    GuardarProducto() {

        var prod = {
            "Id": this.id, "Nombre": this.Nombre, "Descripcion": this.Descripcion, "Categoria": this.Categoria + "", "Precio": this.Precio, "Estado": this.Estado,
            "MetrosCuadrados": this.MetrosCuadrados, "NumeroDeBanyos": this.NumeroDeBanyos, "NumeroDeHabitaciones": this.NumeroDeHabitaciones,
            "Localidad": this.Localidad, "Vehiculo": this.Vehiculo, "Km": this.Km, "Anyo": this.Anyo, "ClaveUsuario": this._UsuariosService.getClaveActual()
        }
        this.id = this.id + 1;
        //this.Productos.push(prod);
        this._productosService.setProducto(prod);
        this.presentToast();
    }
}
