import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Productos } from '../_modelos/Productos';
import { ProductoService } from '../_services/producto.service';
import { MatTableDataSource } from '@angular/material/table';
//PDF
import { jsPDF } from "jspdf";
import html2PDF from 'jspdf-html2canvas';
import { __values } from 'tslib';
import { DOCUMENT } from '@angular/common';





@Component({
  selector: 'app-managedata',
  templateUrl: './managedata.component.html',
  styleUrls: ['./managedata.component.css']
})
export class ManagedataComponent implements OnInit {

  dato!: MatTableDataSource<Productos>;
  producto: Productos = new Productos();
  elemento = [];

  precio;
  cantidad;

  columnas=[
    'producto',
    'precio',
    'cantidad',
    'subtotal',
    
  ];
  document;

  constructor(private productoService : ProductoService,
    @Inject(DOCUMENT) document: Document) {
      this.document= document;
     }

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
      console.log(this.elemento);
      console.log("algo esto", data);
    });
  }

  //Crear pdf
  /*crearFile(){

    const doc = new jsPDF();

     var contenido = document.getElementById('pdf').innerText;
     var contenidoString = contenido;

    doc.text(contenidoString, 10, 10);
    doc.save("Cotización.pdf");
  }*/
  
  generarPdf(){
    html2PDF(document.getElementById('pdf'),{
      allowTaint:true,
      useCors: false,
      scale: 1
    }).then(function(canvas){
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'PNG',7,20,195,105);
      doc.save("cotización.pdf");
    })
  }

//AGREGAR PRODUCTO EN LA TABLA//

 
    
  agregar(){
  
    var producto = this.document.getElementById("producto");
    var precio = this.document.getElementById("precio");
    var cantidad = this.document.getElementById("cantidad");

          console.log(producto);
          console.log(precio);
          console.log(cantidad);

    var datos = document.getElementById("tabla_productos");

    var subtotal = this.precio * this.cantidad;


    datos.innerHTML = `${datos}<tr><td>${producto.valueOf()}</td>`,
                   ` <td>  ${precio.value()}  </td>`
                  //  "<td>"  {{precio.valueOf()  "</td>"
                  //  "<td>"  cantidad.valueOf()"</td>" 
                  //  "<td>"  subtotal.valueOf()+ "</td>"
                   "</tr>";



    this.calcularTotal();
  }

  //CALCULAR TOTALES //

  calcularTotal(){

    var subtotales = document.getElementsByName("subtotal");
    var total = document.getElementById("total");

    var suma =0;

    for(var i=0; i<subtotales.length; i++){
      suma=suma +Number(subtotales[i].innerText)
    }
    total.innerText = "$" +suma;
  }


  
}
