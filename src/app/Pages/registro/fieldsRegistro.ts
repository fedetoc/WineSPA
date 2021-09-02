import { Validators } from '@angular/forms';
const registroFields = [
  {
    name: 'usuario',
    type: 'text',
    placeholder: 'Ingrese un usuario',
    initialValue: '',
    validations: Validators.required,
    plcSpace: 'normal',
  },
  {
    name: 'domicilio',
    type: 'text',
    placeholder: 'Ingrese su domicilio',
    initialValue: '',
    validations: Validators.required,
    plcSpace: 'normal',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Ingrese su email',
    initialValue: '',
    validations: [Validators.required, Validators.email],
    plcSpace: 'small',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Ingrese su contraseña',
    initialValue: '',
    validations: [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/[A-Z]/),
      Validators.pattern(/[a-z]/),
    ],
    plcSpace: 'extra',
  },
  {
    name: 'passwordConfirm',
    type: 'password',
    placeholder: 'Confirme su contraseña',
    initialValue: '',
    validations: Validators.required,
    plcSpace: 'extra',
  },
];

export default registroFields;
