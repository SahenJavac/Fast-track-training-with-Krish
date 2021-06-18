import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    OwnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class OwnerModule { }
