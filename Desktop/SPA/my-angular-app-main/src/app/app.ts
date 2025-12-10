import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { ItemsListComponent } from './components/items-list/items-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, ItemsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-angular-app';
}