import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider/slider.component';
import { NextDirective } from '../next.directive';
import { PrevDirective } from '../prev.directive';


@NgModule({
  declarations: [
    SliderComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
 
    
  ]
})
export class SliderModule { }
