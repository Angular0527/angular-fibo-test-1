import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square1Component } from './square1/square1.component';
import { Mod2Module } from './mod2/mod2.module';



@NgModule({
  declarations: [Square1Component],
  exports: [Square1Component],
  imports: [
    CommonModule,
    Mod2Module
  ]
})
export class Mod1Module { }
