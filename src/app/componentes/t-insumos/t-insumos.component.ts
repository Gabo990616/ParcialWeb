import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/modelos/contrato';
import { Insumo } from 'src/app/modelos/insumo';
import { ContratoServiceService } from 'src/app/servicios/contrato-service.service';
import { InsumoServiceService } from 'src/app/servicios/insumo-service.service';

@Component({
  selector: 'app-t-insumos',
  templateUrl: './t-insumos.component.html',
  styleUrls: ['./t-insumos.component.css'],
})
export class TInsumosComponent implements OnInit {
  insumos!: Insumo[];
  constructor(private insumoservice: InsumoServiceService) {}

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.insumos = this.insumoservice.get();
  }
}
