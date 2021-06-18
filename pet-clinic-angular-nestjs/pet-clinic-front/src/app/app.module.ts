import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PetModule } from './pet/pet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
