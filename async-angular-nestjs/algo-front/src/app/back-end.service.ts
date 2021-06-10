import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'


const mainUrl = 'http://localhost:3000/algos/';

@Injectable({
  providedIn: 'root'
})


export class BackEndService {

 
  constructor(private http: HttpClient) { }


  checkAnagram(word1: string, word2: string): Observable<any> {
    return this.http.post(mainUrl + 'anagram', {
      firstWord: word1,
      secondWord: word2
    });
  }

  arrayFilter(noPara:any , index:string):Observable<any>{
    return this.http.post(mainUrl + 'numbers', {
      noPara,index
    });
  }

  repsCount(sentence: any): Observable<any> {
    return this.http.post(mainUrl + 'reps', {
      sentence
    });
  }




}
