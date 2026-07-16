import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-services',
  imports: [FadeInDirective, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
