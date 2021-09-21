import { Injectable } from '@angular/core';
import { Insumo } from '../modelos/insumo';

@Injectable({
  providedIn: 'root'
})
export class InsumoServiceService {
  post(insumo: Insumo) {
    let insumos: Insumo[] = [];
    if (this.get() != null) {
      insumos = this.get();
    }
    insumos.push(insumo);
    localStorage.setItem('insumo', JSON.stringify(insumos));
  }
  get(): Insumo[] {
    return JSON.parse(localStorage.getItem('insumo') || '[]');
  }
  clear() {
    localStorage.removeItem('insumo');
  }
  constructor() { }
}
