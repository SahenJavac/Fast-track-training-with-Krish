import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({

  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {

received = false;
response:any = '';

 

  

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
  }

  

  onSave(paraOne:string , paraTwo:string){
    console.log(paraOne+ " " + paraTwo)

    this.service.checkAnagram(paraOne,paraTwo).subscribe(response => {
      console.log(response);
      this.received = true;
      this.response = response.result;
    },
    error => {
      console.log(error);
    });
  }

}
