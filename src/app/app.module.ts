import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistrarContratosComponent } from './componentes/registrar-contratos/registrar-contratos.component';
import { RegistrarInsumosComponent } from './componentes/registrar-insumos/registrar-insumos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrarContratosComponent,
    RegistrarInsumosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
