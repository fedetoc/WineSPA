import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Field, FieldObject } from '../../interfaces/fieldObject';
import { validatePassword } from './customValidations';
import registroFields from './fieldsRegistro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup;
  formDefinition: FieldObject = {};
  fieldsDefinition: Field[] = registroFields;
  constructor(public fb: FormBuilder) {
    this.fieldsDefinition.forEach(
      (el) => (this.formDefinition[el.name] = [el.initialValue, el.validations])
    );
    this.formRegistro = this.fb.group(this.formDefinition, {
      validators: validatePassword,
    });
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this.formRegistro.value);
  }

  get usuarioCtrl(): AbstractControl {
    return this.formRegistro.get('usuario')!;
  }

  get domicilioCtrl(): AbstractControl {
    return this.formRegistro.get('domicilio')!;
  }

  get emailCtrl(): AbstractControl {
    return this.formRegistro.get('email')!;
  }

  get contraseniaCtrl(): AbstractControl {
    return this.formRegistro.get('password')!;
  }
  get confirmaContraseniaCtrl(): AbstractControl {
    return this.formRegistro.get('passwordConfirm')!;
  }
}
