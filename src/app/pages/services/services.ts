import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { RouterLink } from '@angular/router';
import { HoverAnim } from '../../directives/hover-anim';


@Component({
  selector: 'app-services',
  imports: [FadeInDirective, RouterLink, HoverAnim],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
