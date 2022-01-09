import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyvalidationService {

  constructor() { }

  GetValidationMessages(f:AbstractControl, name:string)

{
   if(f.errors)
  {

    for(let errroName in f.errors){

      if(errroName=="required") return `${name} alanı boş bırakılamaz.`;
      else if(errroName=="email") return `Email formatı doğru değil.`;
      else if(errroName=="minlegth") return `${name} alanınız en az 5 karakter olmalıdır.`;
      else if(errroName=="maxlegth") return `${name} alanınız en fazla 8 karakter olmalıdır.`;
    }

  }
 return;
}

}
