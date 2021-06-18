import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  animals: any = '';
  message: any = '';

  constructor(private service: BackEndService, private router: Router) { }

  ngOnInit(): void {

    //Load table values from backend-DB
    this.service.getAnimals().subscribe(
      response => {
        this.animals = response;
      },
      error => {
        console.log(error)
      })
  }

  onDelete(id: number) {
    this.service.deleteAnimal(id).subscribe(
      response => {
        this.message = response;
        alert(this.message)
        console.log(this.message)
        window.location.reload();
      },
      error => {
        console.log(error)
      })
  }


  onEdit(id:number,) {
    this.router.navigate(['/edit',id])
  }
}
