import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './landing/header/header.component';
import { DiscographyComponent } from './landing/discography/discography.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path: 'discography', component: DiscographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
