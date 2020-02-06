import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class UsuariosService {

    constructor(private _db: AngularFireDatabase) { }

    nombreUsuario: string
    clave: string

    private obtenerClave(nombre: string) : string {
        let ref = this._db.database.ref("Usuarios");
        ref.once("value", snapshot => {
            snapshot.foreach(child => {
                if (child.Nombre == nombre) {
                    return ""+child.key;
                }
            })
        })
        return null;
    }

    setUsuarioActual(nombre: string) {
        this.nombreUsuario = nombre
        this.clave= this.obtenerClave(this.nombreUsuario)
    }

    getUsuarioActual() {
        return this.nombreUsuario
    }

    getClaveActual() {
        return this.clave
    }
    //Apartado C y D (Lo utilizo para comprobar si un producto esta en favoritos o no y así mostrar un boton o otro en cada producto )
    getFavoritos(id: string) {
        let ref = this._db.database.ref("Usuarios/" + this.clave + "/Favoritos");
        return ref;
    }
    //Fin Apartado C y D
    //Apartado C
    AñadirFavorito(id: string) {
        let ref = this._db.database.ref("Usuarios/" + this.clave + "/Favoritos")
        let res = ref.push({ clave : id })
    }
    //Fin apartado C
    //Apartado D
    EliminarFavorito(id: string) {
        let ref = this._db.database.ref("Usuarios/" + this.clave + "/Favoritos")
        ref.orderbychild('clave').equalto(id).once('value', snapshot => {
            snapshot.forEach(child => {
                var value = child.key
                ref.child(value).remove()
            });
        })
    }
    //Fin Apartado D
    setProducto(p: IProducto): void {
        let ref = this._db.database.ref("Productos")
        let res = ref.push(p)
        console.log("he insertado " + res.Id)
    }
}

