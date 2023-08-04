/// <reference types="node" />
import { Observable } from 'rxjs';
import { Readable } from 'stream';
export declare function streamToObservable<T>(stream: Readable): Observable<T>;
