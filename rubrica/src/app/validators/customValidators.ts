import { FormControl } from "@angular/forms";

export class customValidators{

    public static nameValidator(fc : FormControl){

        if(!fc|| !fc.value){
            return null; 
        }
 
        if(fc.value.includes("ò")){
            return {erroreNome: true}
        }
        return null;
    }

}