import { Component, OnInit } from '@angular/core';
import { Productos } from '../_modelos/Productos';
import { ProductoService } from '../_services/producto.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-managedata',
  templateUrl: './managedata.component.html',
  styleUrls: ['./managedata.component.css']
})
export class ManagedataComponent implements OnInit {

  dato!: MatTableDataSource<Productos>;
  producto: Productos = new Productos();
  elemento = [];

  constructor(private productoService : ProductoService ) { }

  ngOnInit(): void {

    this.dato = new MatTableDataSource([]);
    this.cargarCiclos();

  }

  consultarTodos(){

    this.productoService.consultarProductos().subscribe(data =>{
      this.dato = new MatTableDataSource(data.list);
     })
  }

  //Cargar ciclos para el combo
  cargarCiclos() {
    this.productoService.consultarProductos().subscribe((data) => {
      this.elemento = data.list;
    });
  }
}
