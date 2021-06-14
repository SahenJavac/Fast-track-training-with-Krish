import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';


@Component({
  selector: 'app-array-filter',
  templateUrl: './array-filter.component.html',
  styleUrls: ['./array-filter.component.css']
})
export class ArrayFilterComponent implements OnInit {

  labelTrigger:boolean = false
  response: string = '';

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
  }

  onSave(paraOne: string, index: string) {

    let num = parseInt(index)
    this.service.arrayFilter(paraOne, num).subscribe(response => {
      this.response = response;
      this.labelTrigger = true
    },
      error => {
        console.log(error);
      });

  }

}
