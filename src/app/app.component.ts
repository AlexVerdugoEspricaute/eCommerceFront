import { UsuarioService } from './Services/usuario.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './Interfaces/usuario';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  usuarioList: Usuario[]=[];
  constructor(private UsuarioService: UsuarioService){}

  ngOnInit(): void {
    this.listaUsuario()
  }

  listaUsuario(){
    this.UsuarioService.listaUsuario().subscribe({
      next: (result) => {
        this.usuarioList = result.value; // Asumiento que la respuesta contiene el array de usuarios
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
