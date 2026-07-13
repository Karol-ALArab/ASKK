import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-about',
  imports: [FadeInDirective, MatDivider],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
