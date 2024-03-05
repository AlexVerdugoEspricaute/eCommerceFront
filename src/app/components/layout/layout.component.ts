import { Component } from '@angular/core';
import { VentaComponent } from './Pages/venta/venta.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { HistorialVentaComponent } from './Pages/historial-venta/historial-venta.component';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [VentaComponent,UsuarioComponent,ReporteComponent,ProductoComponent,HistorialVentaComponent,DashBoardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
