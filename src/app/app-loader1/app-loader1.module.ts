/**
 * Created by pthomas on 7/14/2017.
 */
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppLoader1Component } from './app-loader1.component';

import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import {CartoonModule} from './cartoon/cartoon.module';
import {AnimeModule} from './anime/anime.module';
import {AppRoutingModule} from './app-routing.module';
import { AppFooterComponent } from './app-footer/app-footer.component';


@NgModule({
  declarations: [
    AppLoader1Component,
    AppNavigationComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    CartoonModule,
    AnimeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppLoader1Component],
  exports : [AppLoader1Component]
})
export class AppLoader1Module { }
