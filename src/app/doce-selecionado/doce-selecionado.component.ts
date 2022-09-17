import { Component, OnInit } from '@angular/core';
import { DoceService } from '../services/doce.service';

@Component({
  selector: 'app-doce-selecionado',
  templateUrl: './doce-selecionado.component.html',
  styleUrls: ['./doce-selecionado.component.scss'],
})
export class DoceSelecionadoComponent implements OnInit {
  doces: any = [];
  codigoDoce = '';

  constructor(private doceService: DoceService) {}

  ngOnInit() {
    this.getDoces();
  }

  getDoces() {
    return this.doceService.getDoces().subscribe((data: {}) => {
      this.doces = data;
    });
  }

  onClick() {
    this.doces.forEach((doce: { codigo: string; nome: any }) => {
      if (doce.codigo === this.codigoDoce) {
        this.doceService.setDoceSelecionado(doce);
        alert(`${doce.nome} foi selecionado.`);
      }
    });
  }
}
