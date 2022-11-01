import { Component, OnInit, ViewChild } from '@angular/core';
import { Productos } from '../_modelos/Productos';
import { ProductoService } from '../_services/producto.service';

//Componentes de angular material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  //Propiedades de la tabla
  dato!: MatTableDataSource<Productos>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pageSize = 5;
  i:number = 1;
  desde: number = 0;
  hasta: number = 5;

  //Columnas de la tabla
  columnas = [
    "nombre",
    "precio"
  ]





  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {

    this.dato = new MatTableDataSource([]);


  }

  consultarTodos(){

    this.productoService.consultarProductos().subscribe(data =>{
      this.dato = new MatTableDataSource(data.list);
      this.dato.paginator = this.paginator;
      this.dato.sort = this.sort;

     })
  }
}


