import { createCubeArray } from "./createCubeArray.js";

function decrypt(string, key) {
    const cubeArray = createCubeArray(string);
    const keyArr = key.split(':');
    for (let i = keyArr.length - 1; i >= 0; --i) {
        if (keyArr[i].includes(',')) {
            const subKeyArr = keyArr[i].split(',');
            for (let k = subKeyArr.length - 1; k >= 0; --k) {
                let subRotationDir = subKeyArr[k][0];
                let subRotationTime = +subKeyArr[k][1];
                if (subRotationDir == 'U') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].down();
                    }
                } else if (subRotationDir == 'D') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].up();
                    }
                } else if (subRotationDir == 'R') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].left();
                    }
                } else if (subRotationDir == 'L') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].right();
                    }
                }
            }
        } else {
            let rotationDir = keyArr[i][0];
            let rotationTime = +keyArr[i][1];
            if (rotationDir == 'U') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].down();
                }
            } else if (rotationDir == 'D') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].up();
                }
            } else if (rotationDir == 'R') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].left();
                }
            } else if (rotationDir == 'L') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].right();
                }
            }
        }
    }
    
    const str = cubeArray.join('');
    if (str.includes('^')) {
        const index = str.indexOf('^');
        return str.slice(0,index);
    }
    return str;
}

export { decrypt }