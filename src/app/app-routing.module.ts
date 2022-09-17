import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirMoedaComponent } from './inserir-moedas/inserir-moeda.component';

const routes: Routes = [{ path: 'doces', component: InserirMoedaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
