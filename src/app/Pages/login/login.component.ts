import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Field, FieldObject } from '../../interfaces/fieldObject';
import loginFields from './fieldsLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fieldsDefinition: Field[] = loginFields;
  formDefinition: FieldObject = {};
  formLogin: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fieldsDefinition.forEach(
      (el) => (this.formDefinition[el.name] = [el.initialValue, el.validations])
    );
    this.formLogin = this.fb.group(this.formDefinition);
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.formLogin.value);
  }
}
