import { Component, OnInit } from '@angular/core';
import { DoceService } from '../services/doce.service';
import { SaldoService } from '../services/saldo.service';

@Component({
  selector: 'app-comprar-doce',
  templateUrl: './comprar-doce.component.html',
  styleUrls: ['./comprar-doce.component.scss'],
})
export class ComprarDoceComponent implements OnInit {
  constructor(
    private doceService: DoceService,
    private saldoService: SaldoService
  ) {}

  ngOnInit(): void {}

  dispenserDoce() {
    const saldoAtual = this.saldoService.getSaldo();
    if (!this.isDoceSelecionado()) return;
    if (!this.temSaldoSuficiente(saldoAtual)) return;
    if (!this.temDoce()) return;
    const doceSelecionado = this.doceService.getDoceSelecionado();
    const troco = saldoAtual - doceSelecionado.valor;
    alert(
      'Obrigado por comprar ' +
        doceSelecionado.nome +
        '\n Seu troco é R$' +
        troco +
        ',00'
    );
  }

  isDoceSelecionado() {
    const doceSelecionado = !!this.doceService.getDoceSelecionado();
    if (!doceSelecionado) {
      alert('Nenhum doce selecionado.');
    }
    return doceSelecionado;
  }

  temSaldoSuficiente(saldoAtual: number) {
    const temSaldo = this.doceService.temSaldoSuficiente(saldoAtual);
    if (!temSaldo) {
      alert('Saldo insuficiente.');
    }
    return temSaldo;
  }

  temDoce() {
    const temDoce = this.doceService.temDoce();
    if (!temDoce) {
      alert('Não tem mais doce na máquina.');
    }
    return temDoce;
  }
}
