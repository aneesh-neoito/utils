"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcpUtils = void 0;
const tcpp = require("tcp-ping");
const async_utils_1 = require("./async.utils");
var TcpUtils;
(function (TcpUtils) {
    async function probe(url) {
        return new Promise((resolve, reject) => {
            tcpp.probe(url.hostname, parseInt(url.port, 10), (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }
    TcpUtils.probe = probe;
    async function waitProbe(url, maxAttempts = 60) {
        while (!(await TcpUtils.probe(url))) {
            maxAttempts--;
            if (maxAttempts <= 0) {
                throw new Error('Timeout waiting for [' + url.toString() + ']');
            }
            await async_utils_1.AsyncUtils.sleep(1000);
        }
    }
    TcpUtils.waitProbe = waitProbe;
})(TcpUtils = exports.TcpUtils || (exports.TcpUtils = {}));
