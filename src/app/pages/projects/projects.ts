import { Component, OnInit } from '@angular/core';
import { Project } from '../../data/interface/project';
import { ProjectService } from '../../data/data-service/project-service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatCard,
} from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in';
import { HoverAnim } from '../../directives/hover-anim';
import { MatButton } from '@angular/material/button';
import { MatChip } from '@angular/material/chips';
import { projectItems } from '../../data/project-data/project-data';

export const CATEGORY_LIST: string[] = [
  ...new Set(projectItems.map((project) => project.category)),
];

@Component({
  selector: 'app-projects',
  imports: [
    MatCard,
    MatDivider,
    NgOptimizedImage,
    FadeInDirective,
    HoverAnim,
    MatButton,
    MatChip,
    UpperCasePipe,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {

    // storing the constant of all the fetched const categories
  categories = CATEGORY_LIST;
  activeFilter = "All"

  i = 0;

  catAmount = this.categories.length;

  // declaring needed vars to access data of projects
  projectList: Project[] = []; // empty list to fill in with all projects
  selectedProject: Project | undefined; // storage for the selected item to display alone if clicked
  currentIndex: number = 0; // to track index of items in list

  // DI
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}


  // method to set the filter
  setFilter(category: string){
    this.activeFilter = category
  }


  // method to deal with when user clicks on a project to view
  onSelect(id: number): void {
    this.selectedProject = this.projectList.find((item) => item.id === id);
    this.router.navigate(['/projects', id]);
  }

  ngOnInit(): void {
    this.projectService.getProjectItems().subscribe({
      next: (data: Project[]) => {
        this.projectList = data;

        this.route.paramMap.subscribe((params) => {
          const id = Number(params.get('id'));

          if (id) {
            this.currentIndex = this.projectList.findIndex((item) => item.id === id);
            this.selectedProject = this.projectList[this.currentIndex];
          }
        });
      },
      error: (err) => console.error('Error fetching data', err),
      complete: () => console.log('Project data received successfully'),
    });
  }
}
