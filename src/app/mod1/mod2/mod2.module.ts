import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square1Component } from './square1/square1.component';
import { Mod3Module } from './mod3/mod3.module';


@NgModule({
  declarations: [Square1Component],
  exports: [Square1Component],
  imports: [
    CommonModule,
    Mod3Module
  ]
})
export class Mod2Module { }
