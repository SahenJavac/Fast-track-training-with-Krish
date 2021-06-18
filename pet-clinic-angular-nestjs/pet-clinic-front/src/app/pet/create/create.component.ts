import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  animal: any = '';
  animalType: string = '';

  constructor(private service: BackEndService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(type: string, breed: string, age: string, diagnosis: string) {

    this.service.createAnimal(type, breed, age, diagnosis).subscribe(
      response => {
        this.animal = response;
        this.animalType = this.animal.type
        //console.log(this.animalType)
        this.router.navigate(['/view',this.animalType])
      },
      error => {
        console.log(error)
      })
      
      

  }

}
