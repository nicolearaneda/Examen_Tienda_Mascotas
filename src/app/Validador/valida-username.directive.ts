import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[appValidaUsername]',
  providers: [{provide: NG_VALIDATORS,useExisting:ValidaUsernameDirective,multi:true}]
})
export class ValidaUsernameDirective implements Validator{

  validate(control: AbstractControl): import("@angular/forms").ValidationErrors {
    
    const dato = <string>control.value; //control: es como se llame el input
    const datoNoAdmitido = ['user','admin']; 
  
     if(!dato)
     {
       return;
     }
  
     if(datoNoAdmitido.indexOf(dato)!=-1) //si no existe, arroja -1
     {
       return {'ValidaUser':{'message':'Contraseña no admitida'}}
     }
     if(dato==dato.toUpperCase()) //uppercase es mayuscula
     {
       return{'ValidaUser':{'message':'Todas deben ser minúsculas'}}
     }
     return null;
    }
    constructor() { }
  }
  
  
  
