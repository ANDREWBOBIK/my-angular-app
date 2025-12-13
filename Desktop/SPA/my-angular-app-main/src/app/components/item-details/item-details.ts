import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; 

import { ProgrammingLanguage } from '../../shared/models/programming-language';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css'] 
})
export class ItemDetailsComponent implements OnInit {

  language?: ProgrammingLanguage;

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    
    
    this.language = this.dataService.getItemById(id); 
  }
}