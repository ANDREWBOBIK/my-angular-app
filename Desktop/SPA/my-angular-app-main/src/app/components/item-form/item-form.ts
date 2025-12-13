import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../shared/services/data.service';
import { ProgrammingLanguage } from '../../shared/models/programming-language';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemFormComponent implements OnInit {

  languageForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.languageForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      creator: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      year: new FormControl(null, [
        Validators.required,
        Validators.min(1950),
        Validators.max(new Date().getFullYear())
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
      image: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(http|assets)/)
      ]),
      isPopular: new FormControl(true),
      isTrending: new FormControl(false)
    });
  }

  // ===== GETTERS (фикс TS2531) =====
  get nameControl() {
    return this.languageForm.get('name')!;
  }

  get creatorControl() {
    return this.languageForm.get('creator')!;
  }

  get yearControl() {
    return this.languageForm.get('year')!;
  }

  get descriptionControl() {
    return this.languageForm.get('description')!;
  }

  get imageControl() {
    return this.languageForm.get('image')!;
  }

  onSubmit(): void {
    if (this.languageForm.valid) {
      const newLanguage: Omit<ProgrammingLanguage, 'id'> =
        this.languageForm.value;

      this.dataService.addLanguage(newLanguage);
      this.router.navigate(['/items']);
    } else {
      this.languageForm.markAllAsTouched();
    }
  }
}
