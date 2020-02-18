import { Directive } from '@angular/core';

@Directive({
  selector: '[img]',
  host: {
    loading: 'lazy'
  }
})
export class ImgDirective {

  constructor() { }

}
