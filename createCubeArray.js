import { Cube } from "./cube.js";

function createCubeArray(string) {
    const cubeSize = 8;
    let stringLen = string.length;
    let size = stringLen / cubeSize | 0;
    let cubeArray = [];
    for (let i = 0; i < size; ++i) {
        let tmpStr = string.slice(i * cubeSize, (i + 1) * cubeSize);
        let cube = new Cube(tmpStr);
        cubeArray.push(cube);
    }
    let diffLen = stringLen - (size * cubeSize);
    if (diffLen > 0) {
        let diffStr = string.slice(stringLen - diffLen);
        for (let j = 0; j < cubeSize - diffLen; ++j) {
            diffStr += "^";
        }
        const lastCube = new Cube(diffStr);
        cubeArray.push(lastCube);
    }
    return cubeArray;
}

export { createCubeArray }