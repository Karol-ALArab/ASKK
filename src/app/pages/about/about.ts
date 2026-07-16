import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';
import { HoverAnim } from '../../directives/hover-anim';

@Component({
  selector: 'app-about',
  imports: [
    FadeInDirective,
    MatDivider,
    MatToolbar,
    MatCard,
    MatCardContent,
    MatIcon,
    NgOptimizedImage,
    MatCardTitle,
    HoverAnim,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected isMenuOpen: any;

  protected toggleMenu() {}
}
