import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') public textColor: string;

  @HostListener('window:keydown', ['$event']) windowClick($event) {
       switch ($event.code) {
         case 'ArrowUp':
           this.textColor = 'red';
           break;
         case 'ArrowDown':
           this.textColor = 'blue';
           break;
         case 'ArrowLeft':
           this.textColor = 'green';
           break;
         case 'ArrowRight':
           this.textColor = 'grey';
           break;
         default:
           this.textColor = 'black';
           break;
       }
  }

  constructor() { }

}
