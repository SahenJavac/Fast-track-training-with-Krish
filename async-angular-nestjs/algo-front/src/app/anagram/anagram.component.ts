import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({

  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {


  anagramState: boolean = false;
  labelView: string = '';

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
  }


  onSubmit(paraOne: string, paraTwo: string) {

    if (paraOne.length > 1 && paraTwo.length > 1) {
      this.service.checkAnagram(paraOne, paraTwo).subscribe(response => {

        this.anagramState = response;
        if (this.anagramState == true) {
          this.labelView = paraOne.toUpperCase() + " and " + paraTwo.toUpperCase() + " are Anagrams"
        } else {
          this.labelView = paraOne.toUpperCase() + " and " + paraTwo.toUpperCase() + " are not Anagrams"
        }
      },
        error => {
          console.log(error);
        });

    } else {
      this.labelView = "Please enter valid words"
    }

  }

}
