import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/modelos/contrato';
import { Insumo } from 'src/app/modelos/insumo';
import { ContratoServiceService } from 'src/app/servicios/contrato-service.service';
import { InsumoServiceService } from 'src/app/servicios/insumo-service.service';

@Component({
  selector: 'app-registrar-insumos',
  templateUrl: './registrar-insumos.component.html',
  styleUrls: ['./registrar-insumos.component.css'],
})
export class RegistrarInsumosComponent implements OnInit {
  insumo!: Insumo;
  contratos!: Contrato[];
  contrato!: Contrato;
  revisar: boolean = false;

  constructor(
    private insumoservice: InsumoServiceService,
    private contratoservice: ContratoServiceService
  ) {}

  ngOnInit(): void {
    this.insumo = new Insumo();
    this.contratos = this.contratoservice.get();
  }

  add() {
    for (let i = 0; i < this.contratos.length; i++) {
      this.contrato = this.contratos[i];
      if (this.contrato.identificador === this.insumo.identificadorins) {
        if (this.contrato.saldo > this.insumo.valorins) {
          this.contrato.saldo -= this.insumo.valorins;
          this.revisar = true;
        }
      }
    }
    if (this.revisar) {
      alert('Se ha añadido un insumo');
      this.insumoservice.post(this.insumo);
      this.contratoservice.post(this.contrato);
    }
    else
    alert('no es posiblerealizar esta accion')
  }
  ad() {
    this.insumoservice.clear();
  }
}
