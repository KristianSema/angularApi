import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchVideogameComponent } from './search-videogame/search-videogame.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'search', component: SearchVideogameComponent },
  { path: 'item/:id', component: ItemComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
