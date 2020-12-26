import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fn' })
export class PureFunctionPipe<T> implements PipeTransform {
  transform<U>(value: T, callbackFn: (value: T) => U): U {
    return callbackFn(value);
  }
}
