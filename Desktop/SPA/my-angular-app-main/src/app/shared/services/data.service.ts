import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from '../models/programming-language';

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
      description: 'Строго типізована надмножина JavaScript.',
      isTrending: true
    },
    {
      id: 2,
      name: 'Python',
      creator: 'Guido van Rossum',
      year: 1991,
      isPopular: true,
      image: 'assets/Python.jpg',
      description: 'Популярна мова загального призначення.',
      isTrending: true
    },
    {
      id: 3,
      name: 'C++',
      creator: 'Bjarne Stroustrup',
      year: 1985,
      isPopular: true,
      image: 'assets/C++.jpg',
      description: 'Потужна мова з підтримкою ООП.',
      isTrending: false
    },
    {
      id: 4,
      name: 'Pascal',
      creator: 'Niklaus Wirth',
      year: 1970,
      isPopular: false,
      image: 'assets/Pascal.png',
      description: 'Мова для навчання структурному програмуванню.',
      isTrending: false
    }
  ];

  constructor() {}

  
  getItems(): ProgrammingLanguage[] {
    return this.languages;
  }

  
  getItemById(id: number): ProgrammingLanguage | undefined {
    return this.languages.find(lang => lang.id === id);
  }
}