import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FieldObject } from '../interfaces/fieldObject';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup;
  formDefinition: FieldObject;
  constructor(public fb: FormBuilder) {
    this.formDefinition = {
      usuario: ['', Validators.required],
      domicilio: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    };
    this.formRegistro = this.fb.group(this.formDefinition, {
      validators: this.validatePassword,
    });
  }

  ngOnInit(): void {}

  validatePassword: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const contraseniaF = control.get('password');
    const confirmaContraseniaF = control.get('passwordConfirm');
    return contraseniaF &&
      confirmaContraseniaF &&
      contraseniaF.value === confirmaContraseniaF.value
      ? null
      : { passwordNoCoincide: true };
  };

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
}
