import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card';
import { ProgrammingLanguage } from '../../shared/models/programming-language';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent {
  languages: ProgrammingLanguage[] = [
    {
      id: 1,
      name: 'TypeScript',
      creator: 'Microsoft',
      year: 2012,
      isPopular: true,
      image: 'assets/TS.jpg',
      description: 'Мова програмування, розроблена Microsoft, яка є строго типізованою надмножиною JavaScript.',
      isTrending: true
    },
    {
      id: 2,
      name: 'Python',
      creator: 'Guido van Rossum',
      year: 1991,
      isPopular: true,
      image: 'assets/Python.jpg',
      description: 'Високорівнева інтерпретована мова програмування загального призначення.',
      isTrending: true
    },
    {
      id: 3,
      name: 'C++',
      creator: 'Bjarne Stroustrup',
      year: 1985,
      isPopular: true,
      image: 'assets/C++.jpg',
      description: 'Мова програмування загального призначення з підтримкою об’єктно-орієнтованого програмування.',
      isTrending: false
    },
    {
      id: 4,
      name: 'Pascal',
      creator: 'Niklaus Wirth',
      year: 1970,
      isPopular: false,
      image: 'assets/Pascal.png',
      description: 'Імперативна мова програмування, створена для навчання структурному програмуванню.',
      isTrending: false
    }
  ];
}
