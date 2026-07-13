import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [FadeInDirective, MatDivider, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
