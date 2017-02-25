import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  // 평가 로직을 담고 있는 객체
  form = new FormGroup({
    lowerCase: new FormControl('', Validators.required),
    upperCase: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern('[A-Z]{3}')
    ])),
  });

  constructor() { }

  ngOnInit() {
  }

  setValue() {
    this.form.setValue({lowerCase: 'abc', upperCase: 'ABC'});
  }

  reset() {
    this.form.setValue({lowerCase: '', upperCase: ''});
  }

  onSubmit(event) {
    console.log('event = ' + JSON.stringify(event));
    console.info(this.form.value.lowerCase+','+this.form.value.upperCase);
    console.info(this.form.get('lowerCase').value+','+this.form.get('upperCase').value);
  }

  patch() {
    this.form.patchValue({lowerCase: 'one'});
    this.form.patchValue({upperCase: 'ONE'});
  }
}
