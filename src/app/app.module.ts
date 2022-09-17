import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SaldoService } from './services/saldo.service';
import { DocesComponent } from './doces/doces.component';
import { HttpClientModule } from '@angular/common/http';
import { InserirMoedaComponent } from './inserir-moedas/inserir-moeda.component';
import { DoceSelecionadoComponent } from './doce-selecionado/doce-selecionado.component';
import { FormsModule } from '@angular/forms';
import { ComprarDoceComponent } from './comprar-doce/comprar-doce.component';

@NgModule({
  declarations: [
    AppComponent,
    InserirMoedaComponent,
    DocesComponent,
    DoceSelecionadoComponent,
    ComprarDoceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SaldoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
