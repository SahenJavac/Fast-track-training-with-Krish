import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArrayFilterComponent } from './array-filter/array-filter.component';
import { LetterCountComponent } from './letter-count/letter-count.component';
import {BackEndService} from './back-end.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
   
    RouterModule.forRoot([
      {path: 'anagram' ,component:AnagramComponent},
      {path: 'letter' ,component:LetterCountComponent},
      {path: 'number' ,component:ArrayFilterComponent}
    ])
  ],
  providers: [BackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
