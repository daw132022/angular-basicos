import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe', //El selector siempre va a ser el mismo nombre del componente sin la palabra Component
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  nombre: string = 'Ironman';
  edad: Number = 45

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
    //return this.nombre + ' - ' + this.edad.toString(); Es lo mismo que lo de arriba
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';

  }

  cambiarEdad():void{
    this.edad = 25;
  }
}
