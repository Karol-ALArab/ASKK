import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-contact',
  imports: [FadeInDirective, MatDivider],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
