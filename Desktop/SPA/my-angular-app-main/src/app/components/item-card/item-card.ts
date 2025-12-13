import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgrammingLanguage } from '../../shared/models/programming-language'; 
import { TruncatePipe } from '../../shared/pipes/truncate.pipe'; 
import { HighlightDirective } from '../../shared/directives/highlight.directive'; 

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TruncatePipe, 
    HighlightDirective 
  ],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCardComponent {
  @Input() language!: ProgrammingLanguage; 
}