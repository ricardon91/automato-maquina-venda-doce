import { Component, OnInit } from '@angular/core';
import { SaldoService } from 'src/app/services/saldo.service';

@Component({
  selector: 'app-inserir-moeda',
  templateUrl: './inserir-moeda.component.html',
  styleUrls: ['./inserir-moeda.component.scss'],
})
export class InserirMoedaComponent implements OnInit {
  saldoNotas = 0;

  constructor(public saldoService: SaldoService) {}

  ngOnInit() {
    this.saldoService.atualizarSaldo((saldo: any) => {
      this.saldoNotas = saldo;
    });
  }

  adicionarSaldo(total: any) {
    this.saldoService.adicionarSaldo(total);
  }
}
