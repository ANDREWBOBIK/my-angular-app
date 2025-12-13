import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs'; 

// УСУВАЄ TS2304: Додано необхідні імпорти
import { DataService } from '../../shared/services/data.service';
import { ProgrammingLanguage } from '../../shared/models/programming-language';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemCardComponent, FormsModule], 
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit {

  // УСУВАЄ TS2339: Property 'searchText' does not exist
  searchText: string = '';

  private searchTerms = new BehaviorSubject<string>('');
  
  filteredLanguages$!: Observable<ProgrammingLanguage[]>; 

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const languageData$ = this.dataService.getLanguages();
    
    this.filteredLanguages$ = combineLatest([
      languageData$,
      this.searchTerms
    ]).pipe(
      map(([languages, term]) => {
        if (!term) {
          return languages;
        }
        const lowerTerm = term.toLowerCase();
        return languages.filter(lang => 
          lang.name.toLowerCase().includes(lowerTerm) ||
          lang.creator.toLowerCase().includes(lowerTerm)
        );
      })
    );
  }

  onSearchChange(term: string): void {
    this.searchTerms.next(term);
  }

  // УСУВАЄ TS2339: Property 'onSelected' does not exist
  onSelected(language: ProgrammingLanguage): void {
    this.router.navigate(['/items', language.id]);
  }
}