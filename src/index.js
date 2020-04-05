import { stringify } from './lib/stringify';
import { json_parse } from './lib/parse'

let globalObj;

if (typeof globalThis !== 'undefined') {
    globalObj = globalThis;
} else if (typeof self !== 'undefined') {
    globalObj = self;
} else if (typeof window !== 'undefined') {
    globalObj = window;
} else if (typeof global !== 'undefined') {
    globalObj = global;
}

globalObj.JSON.parse = json_parse();
globalObj.JSON.stringify = stringify;
