import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';


@Component({
  selector: 'app-letter-count',
  templateUrl: './letter-count.component.html',
  styleUrls: ['./letter-count.component.css']
})
export class LetterCountComponent implements OnInit {

  charValues: any = [];

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
  }

  onSubmit(sentence: string) {

    this.service.repsCount(sentence)
      .subscribe(
        response => {
          this.charValues = Object.entries(response).map(([k, v]) => ([k, v]));

        },
        error => {
          console.log(error);
        });
  }


}
