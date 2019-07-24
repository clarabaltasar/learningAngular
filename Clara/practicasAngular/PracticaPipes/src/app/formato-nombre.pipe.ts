import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarCurso'
})
export class FormatoNombrePipe implements PipeTransform {

  transform(param1: string, param2: string): any {
    return "[" + param1 + " - " + param2 + "]";
  }

}
