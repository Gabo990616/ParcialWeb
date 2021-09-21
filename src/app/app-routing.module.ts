import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarContratosComponent } from './componentes/registrar-contratos/registrar-contratos.component';
import { RegistrarInsumosComponent } from './componentes/registrar-insumos/registrar-insumos.component';
import { TContratosComponent } from './componentes/t-contratos/t-contratos.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'contrato',
    component: RegistrarContratosComponent,
  },

  {
    path: 'insumos',
    component: RegistrarInsumosComponent,
  },
  {
    path: 'tabla',
    component: TContratosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
