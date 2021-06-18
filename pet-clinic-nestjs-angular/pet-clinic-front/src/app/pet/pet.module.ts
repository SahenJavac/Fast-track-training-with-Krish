import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { BackEndService } from './back-end.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PetComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'view', component: ViewComponent },
      { path: 'view/:type', component: ViewComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'create', component: CreateComponent },
      { path: 'home', component: AppComponent }


    ])
  ],
  providers: [BackEndService],
  exports: [
    PetComponent
  ]
})
export class PetModule { }
