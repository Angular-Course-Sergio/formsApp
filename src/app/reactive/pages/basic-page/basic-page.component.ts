import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6,
};

@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  onSave(): void {
    if (this.myForm.invalid) return;
    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
