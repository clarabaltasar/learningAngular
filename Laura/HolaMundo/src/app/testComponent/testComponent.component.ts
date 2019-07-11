import { Component } from '@angular/core';

@Component({
    selector: 'testComponent',
    templateUrl: './testComponent.component.html'
})

export class testComponent{
    public name:string;
    public properties:string;
    public other:string;
    public property:boolean;
    public red;
    public orange;

    public array:Array<string>;

    constructor(){
        this.name = 'Testing' ;
        this.properties = 'This is a property';
        this.other = 'This is also a property';
        this.property = true;
        this.red = "red";
        this.orange= "orange";
        this.array =  [
            'elemento 1',
            'elemento 2',
            'elemento 3',
            '...'
        ];
    }

}