import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square1Component } from './square1/square1.component';
import { Square2Component } from './square2/square2.component';
import { Square3Component } from './square3/square3.component';
import { Mod5Module } from './mod5/mod5.module';


@NgModule({
  declarations: [Square1Component, Square2Component, Square3Component],
  exports: [Square1Component, Square2Component, Square3Component],
  imports: [
    CommonModule,
    Mod5Module
  ]
})
export class Mod4Module { }
