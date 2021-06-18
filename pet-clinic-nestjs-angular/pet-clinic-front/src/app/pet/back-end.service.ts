import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './model/animal.model';



const mainUrl = 'http://localhost:3000/pets/'

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal> {
    return this.http.get<Animal>(mainUrl)
  }

  createAnimal(type: string, breed: string, age: string, diagnosis: string): Observable<Animal> {
    return this.http.post<Animal>(mainUrl, {
      "type": type,
      "breed": breed,
      "age": age,
      "diagnosis": diagnosis
    })

  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(mainUrl + id)
  }

  update(id: number, type: string, breed: string, age: string, diagnosis: string): Observable<Animal> {
    return this.http.put<Animal>(mainUrl + id, {
      "type": type,
      "breed": breed,
      "age": age,
      "diagnosis": diagnosis
    })
  }

}
