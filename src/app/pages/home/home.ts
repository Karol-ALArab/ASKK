import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-home',
  imports: [FadeInDirective, MatDivider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
