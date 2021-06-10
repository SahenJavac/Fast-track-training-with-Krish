import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-letter-count',
  templateUrl: './letter-count.component.html',
  styleUrls: ['./letter-count.component.css']
})
export class LetterCountComponent implements OnInit {

  received = false;
  response: any;

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
  }

  onSave(sentence:string){
    
    this.service.repsCount(sentence)
    .subscribe(
      response => {
        console.log(response);
        this.received = true;
        this.response = response.result;
      },
      error => {
        console.log(error);
      });


  }

}
