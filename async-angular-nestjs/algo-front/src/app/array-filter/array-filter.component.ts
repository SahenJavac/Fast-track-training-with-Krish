import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-array-filter',
  templateUrl: './array-filter.component.html',
  styleUrls: ['./array-filter.component.css']
})
export class ArrayFilterComponent implements OnInit {

  received = false;
  response: any = '';

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
  }

  onSave(paraOne: string, index: string) {

    let noArray = paraOne.split(",")
    this.service.arrayFilter(noArray, index).subscribe(response => {
      console.log(response);
      this.received = true;
      this.response = response;
    },
      error => {
        console.log(error);
      });

  }

}
