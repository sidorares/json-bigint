import { stringify } from './lib/stringify';
import { json_parse } from './lib/parse'

globalThis.JSON.parse = json_parse();
globalThis.JSON.stringify = stringify;
