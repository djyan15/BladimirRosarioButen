export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Este campo es requerido',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Escribe exactamente ${validatorValue.requiredLength} caracteres`,
            'maxlength': `Escribe exactamente ${validatorValue.requiredLength} caracteres`,
            'phoneNumberLength': `Escribe 10 caracteres mínimo`,
            'requiredPattern': `El email no es válido`,
            'min': `Este campo es requerido`,
            'horaValida': `La duración no es válida`,
            'cedulaIncorrecta': `El no. documento no es válido`,
            'numeroNegativo': `La cantidad no puede ser negativa`,
            'pattern': `El no. documento no es válido`,
            'telefonoInvalido': `El teléfono no es válido`,
            'email': 'El email no es válido ',
            'fechasIguales': `Las fechas no pueden ser iguales`,
            'dateIncorrect': `Las fecha de inicio no puede ser mayor que la de fin`,
            'Mask error': `No es un télefono válido`,
            'cedulaRncIncorrecta': `Debe de ser una cédula o un RNC válido`,
            'fechaFinAdd': `Si la fecha fin fue agregada debe subir el certificado`,
        };

        return config[validatorName];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static phoneNumberLength(control) {
        let value: string = control.value;
        let resultado: any;
        var numberPattern = /\d+/g;

        if (value) {
            resultado = value.match(numberPattern);
            value = '';
            value = value.concat(...resultado);

        }

        if (value && value.length > 9) {
            return null;
        } else {
            return { 'phoneNumberLength': true };
        }
    }

    static emailValidator(control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}
