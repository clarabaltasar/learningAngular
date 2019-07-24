import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/components/empleado';


@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrayEmpleados: Empleado[] = [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Angelica", country: "Francia"},
    {id: 3, name: "Joe", country: "USA"}
  ];

  selectedEmpleado: Empleado = new Empleado();

  addOrEdit() {
    if(this.selectedEmpleado.id == 0) {
      this.selectedEmpleado.id =this.arrayEmpleados.length + 1;
      this.arrayEmpleados.push(this.selectedEmpleado);
    }
    this.selectedEmpleado = new Empleado();

  }

  openForEdit(empleado: Empleado) {
    this.selectedEmpleado = empleado;
  }

  delete() {
    if(confirm('¿Estás seguro?')) {
      this.arrayEmpleados = this.arrayEmpleados.filter(x => x != this.selectedEmpleado);
      this.selectedEmpleado = new Empleado();
    }
  }

}
