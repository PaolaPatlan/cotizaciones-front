import { Component, OnInit, ViewChild } from '@angular/core';
import { Productos } from '../_modelos/Productos';
import { ProductoService } from '../_services/producto.service';

//Componentes
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
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

  producto: Productos = new Productos();
  elemento = [];

  pageSize = 5;
  i:number = 1;
  desde: number = 0;
  hasta: number = 5;

  //Columnas de la tabla
  columnas = [
    "nombre",
  ];

  constructor(

    private productoService : ProductoService,
    private router: Router) {}

  ngOnInit(): void {

  this.dato = new MatTableDataSource([]);}

  //Muestra todos los datos
  consultarTodos(){

    this.productoService.consultarProductos().subscribe(data =>{
      this.dato = new MatTableDataSource(data.list);
      this.dato.paginator = this.paginator;
      this.dato.sort = this.sort;

      Swal.fire({
        icon: "success",
        title: "",
        showConfirmButton: false,
        timer: 2500,
      });
     })
  }

  //Guardar nuevo registro
  guardarProducto(){
    
    this.productoService.agregarProducto(this.producto).subscribe(
      response => this.reload()
    )
  }

  //Refrescar tabla después de agregar un nuevo registro
  reload(){

    this.productoService.consultarProductos().subscribe(data =>{
      this.dato = new MatTableDataSource(data.list);
      this.dato.paginator = this.paginator;
      this.dato.sort = this.sort;

      Swal.fire({
        icon: "success",
        title: "",
        showConfirmButton: false,
        timer: 1500,
      });
     })
  }
}


