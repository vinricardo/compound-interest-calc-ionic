import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  form: FormGroup;
  result: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      value: [null,Validators.required],
      rate: [null,Validators.required],
      term: [null,Validators.required]
    })
  }

  calculate(){
    const value = this.money.value * (1 + ((this.rate.value/100) * this.term.value));
    this.result = value.toFixed(2);
  }
  
  clearForm(){
    this.form.reset();
    this.result = null;
  }

  get money(): AbstractControl{
    return this.form.get('value')!;
  }

  get rate(): AbstractControl{
    return this.form.get('rate')!;
  }

  get term(): AbstractControl{
    return this.form.get('term')!;
  }


}
