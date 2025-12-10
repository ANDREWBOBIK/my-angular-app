import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingLanguage } from '../../shared/models/programming-language';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCardComponent {

  @Input() language!: ProgrammingLanguage;

  @Output() select = new EventEmitter<ProgrammingLanguage>();

  onDetailsClick() {
    this.select.emit(this.language);
  }
}
