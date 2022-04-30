import {Component, OnInit} from '@angular/core';
import {RouteSummary} from "../../models/RouteSummary";
import {RoutesService} from "../../services/routes/routes.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent implements OnInit {
  waitingRoutes: RouteSummary[] = [];
  inProgressRoutes: RouteSummary[] = [];
  endedRoutes: RouteSummary[] = [];

  constructor(private service: RoutesService) {
  }

  ngOnInit(): void {
    this.service
      .getWaiting()
      .subscribe((waitingRoutes: RouteSummary[]) => {
        this.waitingRoutes = waitingRoutes;
      });

    this.service
      .getInProgress()
      .subscribe((inProgressRoutes: RouteSummary[]) => {
        this.inProgressRoutes = inProgressRoutes;
      });

    this.service
      .getEnded()
      .subscribe((endedRoutes: RouteSummary[]) => {
        this.endedRoutes = endedRoutes;
      });
  }
}
