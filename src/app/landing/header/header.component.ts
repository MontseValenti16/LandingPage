import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = 'ADELE';
  description: string = 'Adele Laurie Blue Adkins(Tottenham, Londres, 5 de mayo de 1988), conocida simplemente como Adele, es una cantautora y multinstrumentista británica.Es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.';
  image: string = 'albums/adele.png'
}
