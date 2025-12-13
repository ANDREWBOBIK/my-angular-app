import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from '../models/programming-language';
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private languages: ProgrammingLanguage[] = [
    {
      id: 1,
      name: 'TypeScript',
      creator: 'Microsoft',
      year: 2012,
      isPopular: true,
      image: 'assets/TS.jpg',
      description: 'TypeScript - строго типізована надмножина JavaScript, яка компілюється у чистий JavaScript. Вона підтримує інструменти розробки великих застосунків і є основою для Angular.', 
      isTrending: true
    },
    {
      id: 2,
      name: 'Python',
      creator: 'Guido van Rossum',
      year: 1991,
      isPopular: true,
      image: 'assets/Python.jpg',
      description: 'Python — це популярна високорівнева мова загального призначення. Вона відома своєю читабельністю та використовується у веброзробці, наукових обчисленнях, машинному навчанні та аналізі даних.', 
      isTrending: true
    },
    {
      id: 3,
      name: 'C++',
      creator: 'Bjarne Stroustrup',
      year: 1985,
      isPopular: true,
      image: 'assets/C++.jpg',
      description: 'C++ — потужна мова з підтримкою об’єктно-орієнтованого програмування. Вона широко використовується для розробки операційних систем, ігор та високопродуктивних додатків.', 
      isTrending: false
    },
    {
      id: 4,
      name: 'Pascal',
      creator: 'Niklaus Wirth',
      year: 1970,
      isPopular: false,
      image: 'assets/Pascal.png',
      description: 'Pascal — структурна мова програмування, створена для навчання програмуванню. Вона має чіткий синтаксис і досі використовується у певних освітніх та інженерних галузях.', 
      isTrending: false
    }
  ];

  constructor() {}

  
  getLanguages(): Observable<ProgrammingLanguage[]> {
    return of(this.languages);
  }

  
  getItemById(id: number): ProgrammingLanguage | undefined {
    return this.languages.find(lang => lang.id === id);
  }
}