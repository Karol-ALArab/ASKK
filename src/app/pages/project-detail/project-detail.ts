import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../data/interface/project';
import { ProjectService } from '../../data/data-service/project-service';
import { ActivatedRoute } from '@angular/router';
import { MatDivider } from '@angular/material/list';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-project-detail',
  imports: [
    MatDivider,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    NgOptimizedImage,
    FadeInDirective,
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  @Input() projectItem?: Project;

  projectList: Project[] = [];
  currentIndex: number = 0;

  // DI
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.projectService.getProjectItems().subscribe((items) => {
      this.projectList = items;
    });

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.currentIndex = this.projectList.findIndex((item) => item.id === id);
        this.projectItem = this.projectList[this.currentIndex];
      }
    });
  }
}
