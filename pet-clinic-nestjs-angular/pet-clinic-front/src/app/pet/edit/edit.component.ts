import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number = 0;
  private sub: any;
  message = ''

  constructor(private service: BackEndService,
    private route: ActivatedRoute, private router:Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  onEdit(type: string, breed: string, age: string, diagnosis: string) {

    this.service.update(this.id, type, breed, age, diagnosis).subscribe(response => {
      console.log(response)
      this.message = "Successfully Updated"
      this.router.navigate(['/view',this.message])
    },
      error => {
        console.log(error)
      })
  }

}
