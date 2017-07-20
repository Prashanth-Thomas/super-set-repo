/**
 * Created by pthomas on 7/17/2017.
 */
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimeComponent } from './anime.component';


@NgModule({
  declarations: [
    AnimeComponent
  ],
  imports: [
    CommonModule,

  ],
  providers: [],
  bootstrap: [AnimeComponent],
  exports : [AnimeComponent]
})
export class AnimeModule { }
