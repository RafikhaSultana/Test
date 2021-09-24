import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform
{
    transform( value :string ,charcter:string ):string
    {
       return value.replace(charcter,' ');
    }

}