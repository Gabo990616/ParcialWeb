import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistrarContratosComponent } from './componentes/registrar-contratos/registrar-contratos.component';
import { RegistrarInsumosComponent } from './componentes/registrar-insumos/registrar-insumos.component';
import { TContratosComponent } from './componentes/t-contratos/t-contratos.component';
import { TInsumosComponent } from './componentes/t-insumos/t-insumos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrarContratosComponent,
    RegistrarInsumosComponent,
    TContratosComponent,
    TInsumosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
