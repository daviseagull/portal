import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { VehiclesService } from 'src/app/services/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
})
export class VehicleFormComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  year = new Date().getFullYear() + 1;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehiclesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      status: ['', Validators.required],
      year: ['', Validators.required],
      color: ['', Validators.required],
      seatQuantity: ['', Validators.required],
      model: ['', Validators.required],
      brand: ['', [Validators.required]],
    });

    if (this.isAddMode) {
      this.form.controls['status'].setValue('Disponível');
      this.form.controls['status'].disable();
    }

    if (!this.isAddMode) {
      this.vehicleService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => this.form.patchValue(x));
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.createUser();
  }

  onCancel() {
    this.router.navigate(['/vehicles']);
  }

  private createUser() {
    this.vehicleService
      .createVehicle(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/vehicles']);
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }
}
