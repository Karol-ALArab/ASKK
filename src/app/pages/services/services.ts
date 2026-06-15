import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-services',
  imports: [FadeInDirective, MatDivider],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
