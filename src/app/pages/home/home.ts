import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';
import { NgOptimizedImage } from '@angular/common';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { HoverAnim } from '../../directives/hover-anim';

@Component({
  selector: 'app-home',
  imports: [
    FadeInDirective,
    MatDivider,
    NgOptimizedImage,
    MatCardHeader,
    MatCard,
    MatCardSubtitle,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    HoverAnim,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
