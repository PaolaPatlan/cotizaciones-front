import { Component, OnInit } from '@angular/core';
import { Productos } from '../_modelos/Productos';
import { ProductoService } from '../_services/producto.service';
import { MatTableDataSource } from '@angular/material/table';
//PDF
import { jsPDF } from "jspdf";
import html2PDF from 'jspdf-html2canvas';





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
}
