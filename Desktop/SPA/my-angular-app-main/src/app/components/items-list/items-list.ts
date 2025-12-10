import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { ProgrammingLanguage } from '../../shared/models/programming-language';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent {

  searchText: string = '';

  languages: ProgrammingLanguage[] = [
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

  get filteredLanguages(): ProgrammingLanguage[] {
    return this.languages.filter(lang =>
      lang.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onSelected(lang: ProgrammingLanguage) {
    console.log('Обрана мова:', lang);
  }
}
