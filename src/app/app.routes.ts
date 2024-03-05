import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [

    {
        path: '',
        component:LoginComponent,pathMatch:"full"
    },
    {
        path: 'login',
        component:LoginComponent,pathMatch:"full"
    },
    {
        path: 'pages',
        loadChildren:() => import("./components/layout/layout.routes").then(m => m.LAYOUT_ROUTES)
    }, 
    {
        path: '**',
        redirectTo:'Login',pathMatch:"full"
    }
];
