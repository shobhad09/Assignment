import {Pipe ,PipeTransform} from '@angular/core';

@Pipe
({
    name : greeting,
    //pure:true
})
export class GreetingPipeComponent implements PipeTransform {
    transform(value: string): string {
        let message = "Welcome to " + value + "!!";
        return message;
    }
}
