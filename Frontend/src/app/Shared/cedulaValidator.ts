import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from "@angular/forms";

// Metodo para validar la cedula tanto en la longitud como en la composicion 
export function validarCedula(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {


        let calculo: number;
        let total: number = 0;
        let vCedula = control.value.replace(/-/g, '');
        let Veri = 0;
        let longCed = vCedula.trim().length;
        let verificador = Number(vCedula.substr(vCedula.length - 1, 1));
        let digito: number[] = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
        if (longCed !== 11) {
            return { 'cedulaIncorrecta': true };
        }
        for (let i = 1; i <= 10; i++) {
            calculo = Number(vCedula.substr(i - 1, 1)) * digito[i - 1];
            if (calculo < 10) {
                total += calculo;
            } else {
                total += Number(calculo.toString().substr(0, 1)) + Number(calculo.toString().substr(1, 1));
            }
            Veri = 10 - total % 10;
        }
        if (Veri === 10 || Veri === verificador) {
            return null;
        } else {
            return { 'cedulaIncorrecta': true };
        }
    }
    return null
}