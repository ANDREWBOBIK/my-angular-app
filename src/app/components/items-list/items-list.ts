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
    { id: 1, name: 'TypeScript', creator: 'Microsoft', year: 2012, isPopular: true },
    { id: 2, name: 'Python', creator: 'Guido van Rossum', year: 1991, isPopular: true },
    { id: 3, name: 'C++', creator: 'Bjarne Stroustrup', year: 1985, isPopular: true },
    { id: 4, name: 'Pascal', creator: 'Niklaus Wirth', year: 1970, isPopular: false }
  ];
}