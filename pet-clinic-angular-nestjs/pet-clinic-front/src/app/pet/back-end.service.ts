import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const mainUrl = 'http://localhost:3000/pets/'

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  getAnimals():Observable<any> {
    return this.http.get(mainUrl)
  }

  createAnimal(type: string, breed: string, diagnosis: string, age: string):Observable<any> {
    return this.http.post(mainUrl, {
      "type": type,
      "breed": breed,
      "age": age,
      "diagnosis": diagnosis
    })

  }

  deleteAnimal(id: number):Observable<any> {
    return this.http.delete(mainUrl + id)
  }

  update(id: number, type: string, breed: string,age: string, diagnosis: string) {
    return this.http.put(mainUrl + id, {
      "type": type,
      "breed": breed,
      "age": age,
      "diagnosis": diagnosis
    })
  }

}
