import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home/:usuario', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'insertar-producto',
    loadChildren: () => import('./insertar-producto/insertar-producto.module').then( m => m.InsertarProductoPageModule)
  },
  {
    path: 'ver-productos',
    loadChildren: () => import('./ver-productos/ver-productos.module').then( m => m.VerProductosPageModule)
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.loginPageModule)
    },
    {
        path: 'mis-productos',
        loadChildren: () => import('./mis-productos/mis-productos.module').then(m => m.MisProductosPageModule)
    },
    {
        path: 'editar-producto/:id',
        loadChildren: () => import('./editar-producto/editar-producto.module').then(m => m.EditarProductoPageModule)
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
