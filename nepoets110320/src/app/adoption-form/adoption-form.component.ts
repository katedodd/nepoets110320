import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.scss']
})
export class AdoptionFormComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    state: [null, Validators.required],
  });

  hasUnitNumber = false;

  states = [
    {name: 'squash', abbreviation: 'AL'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
