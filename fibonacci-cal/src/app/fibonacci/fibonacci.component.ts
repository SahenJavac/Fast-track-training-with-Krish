
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {


  fibonacciValue = 0;
  constructor() { }

  ngOnInit(): void { }

  fibonacciCalculate(temp: any){

    if(temp<2){
      this.fibonacciValue = temp;
    }
    else{
    var priviousFib = 0; var currentFib = 1;
    for (let i = 0; i < temp - 1; i++)
    {
        let newFib = priviousFib + currentFib;
        priviousFib = currentFib;
        currentFib = newFib;
    }
    this.fibonacciValue = currentFib;
    }
  }

  




}
