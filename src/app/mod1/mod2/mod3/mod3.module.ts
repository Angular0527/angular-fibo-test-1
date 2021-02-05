import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square1Component } from './square1/square1.component';
import { Square2Component } from './square2/square2.component';
import { Mod4Module } from './mod4/mod4.module';


@NgModule({
  declarations: [Square1Component, Square2Component],
  exports: [Square1Component , Square2Component],
  imports: [
    CommonModule,
    Mod4Module
  ]
})
export class Mod3Module { }
