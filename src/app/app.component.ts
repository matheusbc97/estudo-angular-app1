import { Component, NgModule } from '@angular/core';
import {MatDatepickerModule, MatInputModule, MatFormFieldModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports:[
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string;

  public encerrarJogo(tipo: string) : void {
    console.log(tipo);
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}
