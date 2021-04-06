import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'control-messages',
  template: '<span *ngIf="errorMessage">{{ errorMessage }}</span>',
})
export class ControlMessages {
  errorMessage2: string;
  @Input() control: FormControl;
  @Input() submmitted: boolean;
  constructor() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.submmitted) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
