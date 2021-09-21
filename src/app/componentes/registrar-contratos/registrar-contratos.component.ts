import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/modelos/contrato';
import { ContratoServiceService } from 'src/app/servicios/contrato-service.service';

@Component({
  selector: 'app-registrar-contratos',
  templateUrl: './registrar-contratos.component.html',
  styleUrls: ['./registrar-contratos.component.css']
})
export class RegistrarContratosComponent implements OnInit {
contrato!:Contrato;
  constructor(private contratoservice:ContratoServiceService) { }

  ngOnInit(): void {
    this.contrato=new Contrato;
  }
  add(){
    alert("Se ha añadido un contrato");
    this.contrato.saldo=this.contrato.valor;
    this.contratoservice.post(this.contrato);
  }
ad(){
  this.contratoservice.clear();
}
}
