import {Component} from '@angular/core';
@Component({

    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
        

})

export class VideojuegosComponentClase{
    public nombre:string;
    public mejor_juego:string;
    public mejor_juego_retro:string;
    public mostrar_retro:boolean;
    public color:string;
    public year:number;  
    public arrayvideojuegos:Array<String>;

    
    constructor(){

    this.nombre = 'Video juegos 2019';
    this.mejor_juego = 'Fortnite';
    this.mejor_juego_retro = 'super mario 64';
    this.mostrar_retro = true;
    this.color = 'yellow';
    this.year = 2019;  
    this.arrayvideojuegos = [

        'los simpson',
        'call of dutty',
        'tekken',
        'assasin'
    ]
    }

}