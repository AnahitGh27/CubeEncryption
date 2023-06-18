import { decrypt } from "./decrypt.js";
import { encrypt } from "./encrypt.js";
import { Cube } from "./cube.js";
import { generateRandomKey } from "./generateKey.js";


const str = "students";

function cubeArraySizeCount(string) {
    const cubeSize = 8;
    const strLen = string.length;
    const count = strLen / cubeSize | 0;
    return count < (strLen / cubeSize) ? count + 1 : count
}

const count = cubeArraySizeCount(str);
const key = generateRandomKey(count);
const encStr = encrypt(str, key);
const decStr = decrypt(encStr,key);
console.log(`enc: ${encStr}`);
console.log(`dec: ${decStr}`);