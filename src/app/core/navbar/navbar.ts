import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { HoverAnim } from '../../directives/hover-anim';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink, MatToolbar, MatButton, MatDivider, MatCard, HoverAnim],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
