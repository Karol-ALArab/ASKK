import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-page-not-found',
  imports: [FadeInDirective],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {}
