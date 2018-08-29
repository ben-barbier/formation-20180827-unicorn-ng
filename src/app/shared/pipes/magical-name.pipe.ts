import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'magicalName',
})
export class MagicalNamePipe implements PipeTransform {
    transform(value: string): string {
        return Array
            .from(value)
            .map((letter, idx) => (idx % 2) ? letter.toLowerCase() : letter.toUpperCase())
            .join('');

    }
}
