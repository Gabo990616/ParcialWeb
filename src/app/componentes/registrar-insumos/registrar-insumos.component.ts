import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/modelos/contrato';
import { Insumo } from 'src/app/modelos/insumo';
import { ContratoServiceService } from 'src/app/servicios/contrato-service.service';
import { InsumoServiceService } from 'src/app/servicios/insumo-service.service';

@Component({
  selector: 'app-registrar-insumos',
  templateUrl: './registrar-insumos.component.html',
  styleUrls: ['./registrar-insumos.component.css']
})
export class RegistrarInsumosComponent implements OnInit {
  insumo!:Insumo;
  contratos!:Contrato[];
 
  constructor(private insumoservice:InsumoServiceService,private contratoservice:ContratoServiceService) { }

  ngOnInit(): void {
    this.insumo=new Insumo;
    this.contratos=this.contratoservice.get();
  }
  add(){
    alert("Se ha añadido un insumo");
    this.insumoservice.post(this.insumo);
  }
ad(){
  this.insumoservice.clear();
}
}
