import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {RoutesService} from "../../../services/routes/routes.service";

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  today = new Date().getDate();
  minStartDate = this.today + 5;
  maxStartDate = new Date().getFullYear() + 2;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routesService: RoutesService
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      status: ['', Validators.required],
      startTimestamp: ['', Validators.required],
      endTimestamp: ['', Validators.required],
      startAddress: ['', Validators.required],
      endAddress: ['', Validators.required],
      price: ['', [Validators.required]],
      passengerQuantity: ['', [Validators.required]],
      needLuggageRack: ['', [Validators.required]],
      vehicleId: ['', [Validators.required]],
      driverId: ['', [Validators.required]]
    })

    if (this.isAddMode) {
      this.form.controls['status'].setValue('Em espera');
      this.form.controls['status'].disable();
    }

    if (!this.isAddMode) {
      this.routesService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => this.form.patchValue(x));

      this.form.disable();
    }
  }

  onSubmit() {
    this.submitted = true;
    this.createRoute();
  }

  onCancel() {
    this.router.navigate(['/routes']);
  }

  private createRoute() {
    this.form.controls['status'].enable();

    this.routesService
      .createRoute(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/routes']);
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }
}
