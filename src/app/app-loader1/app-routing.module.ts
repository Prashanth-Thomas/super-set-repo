import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {CartoonComponent} from './cartoon/cartoon.component';
import {AnimeComponent} from './anime/anime.component';

const appRoutes: Routes = [
  { path: '' , redirectTo: '/cartoon', pathMatch: 'full' },
  { path: 'cartoon' , component: CartoonComponent },
  { path: 'anime' , component: AnimeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
