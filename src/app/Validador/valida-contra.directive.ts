import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidaContra]',
  providers: [{provide: NG_VALIDATORS,useExisting:ValidacontraDirective,multi:true}]
})
export class ValidacontraDirective implements Validator{
  //implementar metodo abstracto
  
  validate(control: AbstractControl): import("@angular/forms").ValidationErrors {
    
  const dato = <string>control.value; //control: es como se llame el input
  const datoNoAdmitido = ['123456789012','administrador','username','111111111111','000000']; 

   if(!dato)
   {
     return;
   }

   if(datoNoAdmitido.indexOf(dato)!=-1) //si no existe, arroja -1
   {
     return {'ValidaContra':{'message':'Contraseña no admitida'}}
   }
   if(dato==dato.toLowerCase()) //lowercase transforma a minuscula
   {
      return{'ValidaContra':{'message':'Debe contener al menos una mayúscula'}}
   }
   if(dato==dato.toUpperCase()) //uppercase es mayuscula
   {
     return{'ValidaContra':{'message':'Debe contener al menos una minúscula'}}
   }
   if(dato==dato.toString()) //string es cadena de texto
   {
     return{'ValidaContra':{'message':'Debe contener al menos un número'}}
   }

   return null;

  }
  

  constructor() { }
}


