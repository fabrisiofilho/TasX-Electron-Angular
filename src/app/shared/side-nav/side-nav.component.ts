import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCubesStacked, faDiagramProject, faFolderOpen, faHouse, faKiwiBird, faNewspaper, faPlus, faRadio } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'primeng/dynamicdialog';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'tasx-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  isOpen:boolean = true;

  faHouse = faHouse;
  faListCheck = faListCheck;
  faNewspaper = faNewspaper;
  faCubes = faCubesStacked;
  faRadio = faRadio;
  faProject = faDiagramProject;
  faPlus = faPlus;
  faFolderOpen = faFolderOpen;
  sizeSm: SizeProp = "lg";

  projects: Project[] = [];

  constructor(public dialogService: DialogService,
              private router: Router) { }

  ngOnInit(): void {
    this.projects.push({ id: 1, name: 'Guideme.js' , status: 'Aprovado'});
  }

  createProject() {
    const id = this.projects.length + 1;
    this.projects.push({ id: id, name: 'Untitled', status: 'Pendente'});
  }

  openProject(id: number) {
    this.router.navigate(['/project/' + id]);
  }

  isActivated(path: String) {
    return this.router.url === path;
  }

}
