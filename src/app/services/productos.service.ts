import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductosService {

    constructor(private _db: AngularFireDatabase) { }


    productos: IProducto[];
    producto: IProducto;

    getProductos(): firebase.database.Reference {
        let ref = this._db.database.ref("Productos")
        return ref
    }

    getProducto(clave): firebase.database.Reference {
        let ref = this._db.database.ref("Productos/" + clave)
        return ref
    }

    setProducto(p: IProducto): void {
        let ref = this._db.database.ref("Productos")
        let res = ref.push(p)
        console.log("he insertado " + res.Id)
    }

    
}

