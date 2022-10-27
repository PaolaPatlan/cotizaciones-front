import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ManagedataComponent } from './managedata/managedata.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [

  {path: 'manejo', component: ManagedataComponent},
  {path: 'producto', component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
