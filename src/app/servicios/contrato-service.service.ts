import { Injectable } from '@angular/core';
import { Contrato } from '../modelos/contrato';

@Injectable({
  providedIn: 'root',
})
export class ContratoServiceService {
  post(contrato: Contrato) {
    let contratos: Contrato[] = [];
    if (this.get() != null) {
      contratos = this.get();
    }
    contratos.push(contrato);
    localStorage.setItem('contrato', JSON.stringify(contratos));
  }
  get(): Contrato[] {
    return JSON.parse(localStorage.getItem('contrato') || '[]');
  }
  clear() {
    localStorage.removeItem('contrato');
  }
  constructor() {}
}
