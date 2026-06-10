import { Component, signal } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {Navbar} from './core/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ASKK');
}
