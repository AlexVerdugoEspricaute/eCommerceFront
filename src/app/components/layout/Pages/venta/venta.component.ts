import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { VentaService } from '../../../../Services/venta.service';
// import { Venta } from '../../../../Interfaces/venta';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [    
    CommonModule,
    RouterOutlet,
    RouterLink],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export default class VentaComponent {

  // ventaList: Venta[]=[];
  // constructor(private VentaService: VentaService){}

  // ngOnInit(): void {
  //   this.listaUsuario()
  // }

  // listaUsuario(){
  //   this.VentaService.ventaList().subscribe({
  //     next: (result) => {
  //       this.ventaList = result.value; // Asumiento que la respuesta contiene el array de usuarios
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
