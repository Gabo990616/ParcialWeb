import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/modelos/contrato';
import { ContratoServiceService } from 'src/app/servicios/contrato-service.service';

@Component({
  selector: 'app-t-contratos',
  templateUrl: './t-contratos.component.html',
  styleUrls: ['./t-contratos.component.css']
})
export class TContratosComponent implements OnInit {
  contratos!:Contrato[];
  constructor(private contratoservice:ContratoServiceService) { }

  ngOnInit(): void {
    this.get();
  }
get(){
  this.contratos=this.contratoservice.get();
}
}
