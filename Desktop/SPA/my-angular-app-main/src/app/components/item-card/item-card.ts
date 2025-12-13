import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // *** Потрібен для routerLink ***
import { ProgrammingLanguage } from '../../shared/models/programming-language';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 
  ],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCardComponent {
  @Input() language!: ProgrammingLanguage;
}