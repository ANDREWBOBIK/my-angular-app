import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingLanguage } from '../../shared/models/programming-language';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() language!: ProgrammingLanguage;

  // метод для будущих действий (детали, кнопки и т.д.)
  onDetailsClick(): void {
    console.log('Clicked:', this.language.name);
  }
}
