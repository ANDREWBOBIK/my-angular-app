import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgrammingLanguage } from '../../shared/models/programming-language';
import { DataService } from '../../shared/services/data.service';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  imports: [
    CommonModule,
    FormsModule,        
    ItemCardComponent   
  ]
})
export class ItemsListComponent {

  languages: ProgrammingLanguage[] = [];
  filteredLanguages: ProgrammingLanguage[] = [];
  searchText: string = '';
  isEmptyResult: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.languages = this.dataService.getItems();
    this.filteredLanguages = this.languages;
  }

  onSearchChange(): void {
    const text = this.searchText.trim().toLowerCase();

    if (!text) {
      this.filteredLanguages = this.languages;
      this.isEmptyResult = false;
      return;
    }

    this.filteredLanguages = this.languages.filter(lang =>
      lang.name.toLowerCase().includes(text) ||
      lang.creator.toLowerCase().includes(text)
    );

    this.isEmptyResult = this.filteredLanguages.length === 0;
  }

  
  onSelected(language: ProgrammingLanguage): void {
    console.log('Обрана мова:', language);
  }
}
