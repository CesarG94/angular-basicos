import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor'];
  hDel:string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  borrarHeroe():void{
    console.log("Borrando.....");
    this.hDel = this.heroes.shift() || '';
  }

  get heroeBorrado():string{
    return this.hDel;
  }

}
