import { Component, OnInit } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: String = '/assets/coracao_vazio.png'
  public coracaoCheio: String = '/assets/coracao_cheio.png'

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnInit() {
  }

}
