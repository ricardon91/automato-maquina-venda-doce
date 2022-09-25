import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevador',
  templateUrl: './elevador.component.html',
  styleUrls: ['./elevador.component.scss'],
})
export class ElevadorComponent implements OnInit {
  representacaoAndares: any = [];
  numeroAndares = 4;
  andares: any = [];
  andarAtual = 0;
  isIndoParaCima = true;
  estaParado = false;

  constructor() {}

  ngOnInit(): void {
    this.representacaoAndar();
    setInterval(() => {
      this.moverProximoAndar();
    }, 1000);
  }

  representacaoAndar() {
    for (var i = 0; i < this.numeroAndares; i++) {
      var pessoas = {
        esperandoSubir: Math.floor(Math.random() * 2.2),
        esperandoDescer: Math.floor(Math.random() * 2.2),
        pressionouPainel: false,
      };

      this.andares.push(pessoas);
    }

    for (var i = 0; i < this.numeroAndares; i++) {
      this.representacaoAndares.push(this.andares[this.numeroAndares - i - 1]);
    }
  }

  moverProximoAndar() {
    this.andares[this.andarAtual].pressionouPainel = false;

    if (this.isIndoParaCima) {
      this.andares[this.andarAtual].esperandoSubir = 0;
    } else {
      this.andares[this.andarAtual].esperandoDescer = 0;
    }

    var continuarSubindo = false;
    if (this.isIndoParaCima) {
      for (var i = this.andarAtual + 1; i < this.andares.length; i++) {
        if (
          this.andares[i].esperandoSubir > 0 ||
          this.andares[i].pressionouPainel
        ) {
          continuarSubindo = true;
          break;
        }
      }

      if (!continuarSubindo) {
        for (var i = this.andares.length - 1; i > this.andarAtual; i--) {
          if (this.andares[i].esperandoDescer > 0) {
            continuarSubindo = false;
            this.estaParado = true;
            break;
          }
        }
      }
    } else {
      for (var i = this.andarAtual - 1; i >= 0; i--) {
        if (
          this.andares[i].esperandoDescer > 0 ||
          this.andares[i].pressionouPainel
        ) {
          continuarSubindo = true;
          break;
        }
      }

      if (!continuarSubindo) {
        for (var i = 0; i < this.andarAtual; i++) {
          if (this.andares[i].esperandoSubir > 0) {
            continuarSubindo = true;
            this.estaParado = true;
            break;
          }
        }
      }
    }

    if (!continuarSubindo) {
      if (this.fezSolicitacao(!this.isIndoParaCima)) {
        this.direcaoContraria();
      }
    } else {
      if (this.isIndoParaCima) this.andarAtual++;
      else this.andarAtual--;

      if (this.andarAtual < 0 || this.andarAtual >= this.numeroAndares) {
        this.direcaoContraria();
      }
    }
  }

  fezSolicitacao(direcao: any) {
    if (direcao) {
      for (var i = 0; i < this.andares.length; i++) {
        if (i > this.andarAtual && this.andares[i].pressionouPainel) {
          return true;
        }
        if (this.andares[i].esperandoSubir) {
          return true;
        }
      }
    } else {
      for (var i = 0; i < this.andares.length; i++) {
        if (i < this.andarAtual && this.andares[i].pressionouPainel) {
          return true;
        }
        if (this.andares[i].esperandoDescer) {
          return true;
        }
      }
    }
    return false;
  }

  direcaoContraria() {
    this.isIndoParaCima = !this.isIndoParaCima;
    for (var i = 0; i < this.andares.length; i++) {
      this.andares[i].pressionouPainel = false;
    }
  }

  pedirSubir(floorModel: any) {
    floorModel.esperandoSubir++;
  }

  pedirDescer(floorModel: any) {
    floorModel.esperandoDescer++;
  }

  irParaAndar(floorModel: any) {
    floorModel.pressionouPainel = true;
  }
}
