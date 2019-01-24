import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';

//usando rutas
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component'; 

//usando rutas: hacemos referencia a los componentes creados
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    ProductosComponent,
    ContactoComponent,
    EncabezadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //usando rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
