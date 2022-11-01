import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagedataComponent } from './managedata/managedata.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoService } from './_services/producto.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatTableExporterModule } from "mat-table-exporter";




@NgModule({
  declarations: [
    AppComponent,
    ManagedataComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTableExporterModule
  ],
  providers: [ ProductoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
