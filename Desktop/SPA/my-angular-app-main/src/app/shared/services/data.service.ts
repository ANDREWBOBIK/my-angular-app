import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from '../models/programming-language';
import { Observable, BehaviorSubject } from 'rxjs'; 

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
      description: 'TypeScript - строго типізована надмножина JavaScript...', 
      isTrending: true
    },
    {
      id: 2,
      name: 'Python',
      creator: 'Guido van Rossum',
      year: 1991,
      isPopular: true,
      image: 'assets/Python.jpg',
      description: 'Python — це популярна високорівнева мова загального призначення.', 
      isTrending: true
    },
    {
      id: 3,
      name: 'C++',
      creator: 'Bjarne Stroustrup',
      year: 1985,
      isPopular: true,
      image: 'assets/C++.jpg',
      description: 'C++ — потужна мова з підтримкою об’єктно-орієнтованого програмування.', 
      isTrending: false
    },
    {
      id: 4,
      name: 'Pascal',
      creator: 'Niklaus Wirth',
      year: 1970,
      isPopular: false,
      image: 'assets/Pascal.png',
      description: 'Pascal — структурна мова програмування, створена для навчання програмуванню.', 
      isTrending: false
    }
  ];
  

  private languagesSubject = new BehaviorSubject<ProgrammingLanguage[]>(this.languages);

  constructor() {}


  getLanguages(): Observable<ProgrammingLanguage[]> {
    return this.languagesSubject.asObservable();
  }

  getItemById(id: number): ProgrammingLanguage | undefined {
    
    return this.languages.find(lang => lang.id === id);
  }

  
  addLanguage(newLang: Omit<ProgrammingLanguage, 'id'>): void {
    const newId = this.languages.length > 0 
                  ? Math.max(...this.languages.map(l => l.id)) + 1 
                  : 1;
    
    const languageToAdd: ProgrammingLanguage = {
      ...newLang,
      id: newId
    };

    this.languages.push(languageToAdd);
    
    
    this.languagesSubject.next([...this.languages]);
  }
}