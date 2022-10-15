import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faDiagramProject, faEllipsisVertical, faMessage, faStar, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id?: number;
  sub: any;

  faGear = faEllipsisVertical;
  faStart = faStar;
  faMessage = faMessage;
  faPlusUser = faUserPlus;

  faProject = faDiagramProject;
  sizeSm: SizeProp = "lg";

  project?: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
