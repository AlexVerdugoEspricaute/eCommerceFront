import { Component } from '@angular/core';

import  UsuarioComponent  from './Pages/usuario/usuario.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [UsuarioComponent,ReporteComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
