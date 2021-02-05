import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square1Component } from './square1/square1.component';
import { Square2Component } from './square2/square2.component';
import { Square3Component } from './square3/square3.component';
import { Square4Component } from './square4/square4.component';
import { Square5Component } from './square5/square5.component';



@NgModule({
  declarations: [Square1Component, Square2Component, Square3Component, Square4Component, Square5Component],
  exports: [Square1Component, Square2Component, Square3Component, Square4Component, Square5Component],
  imports: [
    CommonModule
  ]
})
export class Mod5Module { }
