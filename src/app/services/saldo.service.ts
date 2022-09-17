import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaldoService {
  private saldo: number = 0;
  private subject: Subject<number> = new Subject<number>();

  constructor() {}

  private updateSubject(): void {
    this.subject.next(this.saldo);
  }

  atualizarSaldo(callback: any): void {
    this.subject.asObservable().subscribe(callback);
  }

  adicionarSaldo(total: any) {
    this.saldo += total;
    this.updateSubject();
  }

  getSaldo(): number {
    return this.saldo;
  }
}
