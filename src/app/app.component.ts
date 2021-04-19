import { Component, OnInit } from '@angular/core';
import { ColunaModel } from "../models/ColunaModel"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MeuProjeto';
  public colunas: Array<ColunaModel> = [];
  constructor() {

  }


  carregaColunas() {
    var lista = [];
    var valores = [60, 9, 100, 20, 75, 33, 39, 3, 18, 59, 33, 44, 12, 10]
    for (let index = 0; index < 8; index++) {
      var coluna = new ColunaModel();
      coluna.porcentagem = valores[index];
      coluna.descricao = "Descricao - " + index;
      lista.push(coluna);
    }

    this.colunas = lista;

  }
  montaPorcentagemColuna(valor: any) {
    return valor + "%";
  }


  ngOnInit() {
    this.carregaColunas();
  }


}
