import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Navbar} from './core/navbar/navbar';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    MatButton,
    MatCard,
    RouterLink,
    RouterLinkActive,
    Home,
    About,
    Services,
    Projects,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ASKK');

  // for dropdown toggle in mobile
  isMenuOpen: boolean = false;
}
