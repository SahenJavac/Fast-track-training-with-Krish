import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.scss']
})
export class VowelsComponent implements OnInit {

  vowelWords: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  vowelSort(para: any) {

    this.vowelWords = []
    let wordArr = para.toLowerCase().split(" ")
    let vowelRegex = '^[aeiou].*';


    for (let i = 0; i < wordArr.length; i++) {

      if (wordArr[i].match(vowelRegex)) {

        this.vowelWords.push(wordArr[i])
      }
    }
    this.vowelWords.sort();


  }

}
