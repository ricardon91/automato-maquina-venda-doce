import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElevadorComponent } from './elevador/elevador.component';
import { HomeComponent } from './home/home.component';
import { InserirMoedaComponent } from './inserir-moedas/inserir-moeda.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doces', component: InserirMoedaComponent },
  { path: 'elevador', component: ElevadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
