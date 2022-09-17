import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Doce } from '../classes/doce';

@Injectable({
  providedIn: 'root',
})
export class DoceService {
  private apiUrl = 'http://localhost:3000/doces';
  private doceSelecionado: any;

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getDoces(): Observable<Doce> {
    return this.http
      .get<Doce>(this.apiUrl, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateDoce(id: any, doce: any): Observable<Doce> {
    return this.http
      .put<Doce>(
        this.apiUrl + '/doces/' + id,
        JSON.stringify(doce),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  setDoceSelecionado(doce: any): void {
    return (this.doceSelecionado = doce);
  }

  getDoceSelecionado() {
    return this.doceSelecionado;
  }

  temSaldoSuficiente(saldoAtual: number): boolean {
    if (!this.doceSelecionado) return false;
    const temSaldoSuficiente = saldoAtual >= this.doceSelecionado.valor;
    return temSaldoSuficiente;
  }

  temDoce(): boolean {
    return this.doceSelecionado && this.doceSelecionado.restante > 0;
  }

  dispenserDoce(doce: any) {
    this.doceSelecionado.restante -= 1;
    return (this.doceSelecionado = doce);
    //this.updateDoce(this.doceSelecionado.id, this.doceSelecionado);
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
