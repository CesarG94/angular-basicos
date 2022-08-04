import { Component } from "@angular/core";


@Component({
    selector: "app-heroe",
    templateUrl: "./heroe.component.html"
})

export class HeroeComponent{

    nombre:string = "Thor";
    edad:number = 44;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad} `;
    }

    cambiarHeroe():void{
        this.nombre = "Spiderman";
    }

    cambiarEdad():void{
        this.edad = 12;
    }

}