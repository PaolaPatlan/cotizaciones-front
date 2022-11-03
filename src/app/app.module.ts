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
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';




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
    MatTableExporterModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule

  ],
  providers: [ ProductoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
