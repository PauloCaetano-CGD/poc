import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
