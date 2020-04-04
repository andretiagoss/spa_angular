import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  public contadorClique: number = 0;

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  // A função KeyUp não foi comentado pois no exemplo foi usado no Two-Way Binding com o NgModel 
  // KeyUp(event: any){
  //   this.nome = event.target.value;
  // }

}