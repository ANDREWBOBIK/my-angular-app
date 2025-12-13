import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs'; 
import { ItemCardComponent } from '../item-card/item-card';
import { ProgrammingLanguage } from '../../shared/models/programming-language';
import { DataService } from '../../shared/services/data.service'; 
@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent], 
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent implements OnInit {
  searchText: string = '';
  languages$!: Observable<ProgrammingLanguage[]>; 
  constructor(private dataService: DataService) {} 
  ngOnInit(): void {
    this.languages$ = this.dataService.getLanguages(); 
  }
  onSelected(lang: ProgrammingLanguage) {
    console.log('Обрана мова:', lang);
  }
}