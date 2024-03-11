import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path:'layout', 
    loadComponent: ()=> import('./components/layout/layout.component')
    },
    {
        path:'productos', 
    loadComponent: ()=> import('./components/layout/Pages/producto/producto.component')
    },
    {
        path:'historial-venta', 
    loadComponent: ()=> import('./components/layout/Pages/historial-venta/historial-venta.component')
    },
    {
        path:'venta', 
    loadComponent: ()=> import('./components/layout/Pages/venta/venta.component')
    },
    {
        path:'login', 
    loadComponent: ()=> import('./components/login/login.component')
    },
    {path:'',redirectTo:'layout',pathMatch:'full'},
    {path:'**',redirectTo:'layout',pathMatch:'full'},
];

