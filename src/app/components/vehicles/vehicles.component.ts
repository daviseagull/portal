import { Component, OnInit } from '@angular/core';
import { VehicleSummary } from '../../models/VehicleSummary';
import { VehiclesService } from '../../services/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  availableVehicles: VehicleSummary[] = [];
  unavailableVehicles: VehicleSummary[] = [];

  constructor(private service: VehiclesService) {}

  ngOnInit(): void {
    this.service
      .getAvailable()
      .subscribe((availableVehicles: VehicleSummary[]) => {
        this.availableVehicles = availableVehicles;
      });

    this.service
      .getUnavailable()
      .subscribe((unavailableVehicles: VehicleSummary[]) => {
        this.unavailableVehicles = unavailableVehicles;
      });
  }
}
