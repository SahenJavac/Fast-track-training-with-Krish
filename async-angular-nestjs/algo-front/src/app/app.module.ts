import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArrayFilterComponent } from './array-filter/array-filter.component';
import { LetterCountComponent } from './letter-count/letter-count.component';
import { BackEndService } from './back-end.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterCountComponent,
    AnagramComponent,
    ArrayFilterComponent,
    HomeComponent

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    CommonModule,

    RouterModule.forRoot([
      { path: 'anagram', component: AnagramComponent },
      { path: 'letter', component: LetterCountComponent },
      { path: 'number', component: ArrayFilterComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [BackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
