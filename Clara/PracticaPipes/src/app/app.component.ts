import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaPipes';
  informacion: any = [
    {codigo: 1, nombre: "Clara", apellido: "Baltasar", edad: 22},
    {codigo: 2, nombre: "Marta", apellido: "Ortiz", edad: 23},
    {codigo: 2, nombre: "María", apellido: "Collado", edad: 21}

  ]
}
