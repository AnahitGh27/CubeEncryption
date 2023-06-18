import { createCubeArray } from "./createCubeArray.js";

function encrypt(string, key) {
    const cubeArray = createCubeArray(string);
    const keyArr = key.split(":");
    for (let i = 0; i < keyArr.length; ++i) {
        if (keyArr[i].includes(',')) {
            const subKeyArr = keyArr[i].split(',');
            for (let k = 0; k < subKeyArr.length; ++k) {
                const subRotationDir = subKeyArr[k][0];
                const subRotationTime = +subKeyArr[k][1];
                if (subRotationDir == 'U') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].up();
                    }
                } else if (subRotationDir == 'D') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].down();
                    }
                } else if (subRotationDir == 'R') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].right();
                    }
                } else if (subRotationDir == 'L') {
                    for (let j = 0; j < subRotationTime; ++j) {
                        cubeArray[i].left();
                    }
                }
            }
        } else {
            let rotationDir = keyArr[i][0];
            let rotationTime = +keyArr[i][1];
            if (rotationDir == 'U') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].up();
                }
            } else if (rotationDir == 'D') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].down();
                }
            } else if (rotationDir == 'R') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].right();
                }
            } else if (rotationDir == 'L') {
                for (let j = 0; j < rotationTime; ++j) {
                    cubeArray[i].left();
                }
            }
        }
    }

    return cubeArray.join('');
}

export { encrypt }