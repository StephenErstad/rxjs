import { zip as zipStatic } from '../observable/zip';
import { Observable } from '../Observable';
import { ObservableInput, OperatorFunction } from '../types';

/* tslint:disable:max-line-length */
export function zip<T, R>(project: (v1: T) => R): OperatorFunction<T, R>;
export function zip<T, T2, R>(v2: ObservableInput<T2>, project: (v1: T, v2: T2) => R): OperatorFunction<T, R>;
export function zip<T, T2, T3, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, project: (v1: T, v2: T2, v3: T3) => R): OperatorFunction<T, R>;
export function zip<T, T2, T3, T4, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, project: (v1: T, v2: T2, v3: T3, v4: T4) => R): OperatorFunction<T, R>;
export function zip<T, T2, T3, T4, T5, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R): OperatorFunction<T, R>;
export function zip<T, T2, T3, T4, T5, T6, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): OperatorFunction<T, R> ;
export function zip<T, T2>(v2: ObservableInput<T2>): OperatorFunction<T, [T, T2]>;
export function zip<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>): OperatorFunction<T, [T, T2, T3]>;
export function zip<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): OperatorFunction<T, [T, T2, T3, T4]>;
export function zip<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): OperatorFunction<T, [T, T2, T3, T4, T5]>;
export function zip<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): OperatorFunction<T, [T, T2, T3, T4, T5, T6]> ;
export function zip<T, R>(...observables: Array<ObservableInput<T> | ((...values: Array<T>) => R)>): OperatorFunction<T, R>;
export function zip<T, R>(array: Array<ObservableInput<T>>): OperatorFunction<T, R>;
export function zip<T, TOther, R>(array: Array<ObservableInput<TOther>>, project: (v1: T, ...values: Array<TOther>) => R): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * @deprecated Deprecated in favor of static zip.
 */
export function zip<T, R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): OperatorFunction<T, R> {
  return function zipOperatorFunction(source: Observable<T>) {
    return source.lift.call(zipStatic<R>(source, ...observables));
  };
}