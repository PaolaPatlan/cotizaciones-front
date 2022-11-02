import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../_modelos/Productos';
import { Response } from '../_modelos/Response';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {



  constructor(private http:HttpClient) {}


  consultarProductos():Observable<Response<Productos>>{

    let url = 'http://localhost:8081/producto/consultarTodos';

    return this.http.get<Response<Productos>>(url,{headers: new HttpHeaders().append("Content-Type", "aplication/json")})

  }

  agregarProducto(producto:Productos):Observable<Response<Productos>>{

    let url = 'http://localhost:8081/producto/guardarProducto';
    return this.http.post<Response<Productos>>(url,producto);

  }

}

