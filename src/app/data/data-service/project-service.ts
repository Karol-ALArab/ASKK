import { Injectable } from '@angular/core';
import { Project } from '../interface/project';
import { projectItems } from '../project-data/project-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  // local list for all projects
  private projectItems: Project[] = projectItems

  constructor() {
  }

  // methods to get items from local list
  getProjectItems(): Observable<Project[]>{
    return of(this.projectItems)
  }
}
