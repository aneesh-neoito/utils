"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncUtils = void 0;
const _ = require("lodash");
var AsyncUtils;
(function (AsyncUtils) {
    async function map(arr = [], fn) {
        const promises = arr.map(fn);
        return await Promise.all(promises);
    }
    AsyncUtils.map = map;
    async function each(arr = [], fn) {
        const promises = arr.map(fn);
        await Promise.all(promises);
    }
    AsyncUtils.each = each;
    async function serialMap(arr = [], fn) {
        const results = [];
        for (const [index, item] of arr.entries()) {
            const result = await fn(item, index, arr);
            results.push(result);
        }
        return results;
    }
    AsyncUtils.serialMap = serialMap;
    async function sleep(ms) {
        return new Promise((resolve) => {
            return setTimeout(resolve, ms);
        });
    }
    AsyncUtils.sleep = sleep;
    async function times(n, fn) {
        const ps = _.times(n, fn);
        return await Promise.all(ps);
    }
    AsyncUtils.times = times;
})(AsyncUtils = exports.AsyncUtils || (exports.AsyncUtils = {}));
