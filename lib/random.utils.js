"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomUtils = void 0;
const _ = require("lodash");
const crypto = require("crypto");
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
var RandomUtils;
(function (RandomUtils) {
    function alphaNumeric(count) {
        let str = '';
        while (str.length < count) {
            str += _.sample(ALPHABET);
        }
        return str;
    }
    RandomUtils.alphaNumeric = alphaNumeric;
    function randomInt(min, max) {
        return _.random(min, max, false);
    }
    RandomUtils.randomInt = randomInt;
    function randomId(length) {
        let chars = '';
        while (chars.length < length) {
            chars += crypto
                .randomBytes(length * 2)
                .toString('base64')
                .replace(/[^a-z0-9]/i, '');
        }
        return chars.substr(0, length);
    }
    RandomUtils.randomId = randomId;
    function slugify(words) {
        return words
            .map((word) => word
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9_\-]+/gi, '')
            .trim())
            .join('-')
            .toLowerCase();
    }
    RandomUtils.slugify = slugify;
})(RandomUtils = exports.RandomUtils || (exports.RandomUtils = {}));
