import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() placeholder = '';
  @Input() name = '';
  @Input() initialValue = '';
  @Input() placeholderSpace = 'small';
  @Input() type = 'text';
  @Input() bottomMargin = '0';
  @Input() fGroup = new FormGroup({});
  constructor() {}

  get controlAtr() {
    return this.fGroup.get(this.name)!;
  }

  ngOnInit(): void {}
}
