import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-services',
  imports: [FadeInDirective, MatDivider, RouterLink, MatToolbar, MatButton],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
