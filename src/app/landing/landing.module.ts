import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DiscographyComponent } from './discography/discography.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DiscographyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
