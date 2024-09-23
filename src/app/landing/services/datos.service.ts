import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  getDiscography(){
    return[
      {title: '30', year: 2021, image: '30.png' },
      {title: '25', year: 2015, image: '25.png'},
      {title: '21', year: 2011, image: '21.png'},
      {title: '19', year: 2008, image: '19.png'},
      {title: '1988', year: 2008, image: '1988.png'},
      {title: 'Live at the Royal Albert Hall', year: 2011, image: 'LR.png'}
    ];
  }
}
