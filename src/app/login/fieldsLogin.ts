import { Validators } from '@angular/forms';
const loginFields = [
  {
    name: 'user',
    type: 'text',
    placeholder: 'Usuario o email',
    initialValue: '',
    validations: Validators.required,
    plcSpace: 'normal',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Contraseña',
    initialValue: '',
    validations: Validators.required,
    plcSpace: 'extra',
  },
];

export default loginFields;
