import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase ;

  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement> resposta.target).value
    //console.log(this.resposta)
  }

  public verificaResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){
      //alert('A tradução está correta')

      this.rodada++;
      this.progresso += (100/this.frases.length);

      if(this.rodada == 4){
        this.encerrarJogo.emit('vitoria')
        alert('Concluiu as traduções com sucesso!')
      }else{
        this.atualizaRodada()
      }

    }else{
      //alert('A tradução está errada')
      this.tentativas--;

      if(this.tentativas == -1){
        this.encerrarJogo.emit('derrota')
        alert('Você perdeu as tentativas')
      }
    }


  }

  public atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada];
      this.resposta = ""
  }
}
