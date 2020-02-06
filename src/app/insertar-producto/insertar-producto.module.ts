import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarProductoPageRoutingModule } from './insertar-producto-routing.module';

import { InsertarProductoPage } from './insertar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarProductoPageRoutingModule
  ],
  declarations: [InsertarProductoPage]
})
export class InsertarProductoPageModule {}
