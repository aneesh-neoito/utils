"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamToObservable = void 0;
const rxjs_1 = require("rxjs");
function streamToObservable(stream) {
    stream.pause();
    return new rxjs_1.Observable((observer) => {
        function dataHandler(data) {
            observer.next(data);
        }
        function errorHandler(err) {
            observer.error(err);
        }
        function endHandler() {
            observer.complete();
        }
        stream.addListener('data', dataHandler);
        stream.addListener('error', errorHandler);
        stream.addListener('end', endHandler);
        stream.resume();
        return () => {
            stream.removeListener('data', dataHandler);
            stream.removeListener('error', errorHandler);
            stream.removeListener('end', endHandler);
        };
    });
}
exports.streamToObservable = streamToObservable;
