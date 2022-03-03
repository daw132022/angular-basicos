import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || '' ; //Si shift es undefined podemos utilizar || para que devuelva un string vacio

  }
}


