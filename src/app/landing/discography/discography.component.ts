import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent {
  albums: any[]=[];

  constructor(private DatosService: DatosService){ }

  ngOnInit(): void{
    this.albums = this.DatosService.getDiscography();
  }
}
