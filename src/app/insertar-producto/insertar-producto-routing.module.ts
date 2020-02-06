import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarProductoPage } from './insertar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarProductoPageRoutingModule {}
