import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nepoet-adoption',
  templateUrl: './nepoet-adoption.component.html',
  styleUrls: ['./nepoet-adoption.component.scss']
})
export class NepoetAdoptionComponent implements OnInit {

  adoptionForm;

  constructor() { }

  ngOnInit(): void {
  }

  adoptNepoet(response) {
    if (!response) {
      alert("that's okay!");
    }
    else if (response) {
      this.adoptionForm = true;
    }
  }

  tooManyQuestions() {
    window.close();
  }

}
