import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/components/pelicula';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrayPeliculas: Pelicula[] = [
    {id: 1, titulo: "500 days of Summer", anio: 2011},
    {id: 2, titulo: "La habitación de Fermat", anio: 2009},
    {id: 3, titulo: "La perfección", anio: 2019}
  ];

  selectedPelicula: Pelicula = new Pelicula();

  addOrEdit() {
    if(this.selectedPelicula.id == 0) {
      this.selectedPelicula.id =this.arrayPeliculas.length + 1;
      this.arrayPeliculas.push(this.selectedPelicula);
    }
    this.selectedPelicula = new Pelicula();

  }

  openForEdit(pelicula: Pelicula) {
    this.selectedPelicula = pelicula;
  }

  delete() {
    if(confirm('¿Estás seguro?')) {
      this.arrayPeliculas = this.arrayPeliculas.filter(x => x != this.selectedPelicula);
      this.selectedPelicula = new Pelicula();
    }
  }

}
