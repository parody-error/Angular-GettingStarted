import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToCharacter'
})
export class ConvertToCharacterPipe implements PipeTransform {
    transform(value: string, fromCharacter: string, toCharacter: string): string {
        return value.replace(fromCharacter, toCharacter);
    }
}
