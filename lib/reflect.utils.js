"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetadata = exports.setMetadata = exports.pushMetadata = void 0;
require("reflect-metadata");
const pushMetadata = (metadataKey, ...metadataValues) => {
    return (target, key, descriptor) => {
        let metadata;
        if (descriptor) {
            metadata = Reflect.getMetadata(metadataKey, descriptor.value) || [];
            metadata.push(...metadataValues);
            Reflect.defineMetadata(metadataKey, metadata, descriptor.value);
            return descriptor;
        }
        metadata = Reflect.getMetadata(metadataKey, target) || [];
        metadata.push(...metadataValues);
        Reflect.defineMetadata(metadataKey, metadata, target);
        return target;
    };
};
exports.pushMetadata = pushMetadata;
const setMetadata = (metadataKey, metadataValue) => {
    return (target, key, descriptor) => {
        if (descriptor) {
            Reflect.defineMetadata(metadataKey, metadataValue, descriptor.value);
            return descriptor;
        }
        Reflect.defineMetadata(metadataKey, metadataValue, target);
        return target;
    };
};
exports.setMetadata = setMetadata;
const getMetadata = (metadataKey, target) => {
    return Reflect.getMetadata(metadataKey, target);
};
exports.getMetadata = getMetadata;
