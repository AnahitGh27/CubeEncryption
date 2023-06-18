function generateRandomKey(count) {
    const keyLetters = ['D', 'L', 'U', 'R'];
    const keys = [];
    for (let i = 0; i < count; i++) {
        const keyElements = [];
        const numElements = Math.floor(Math.random() * 5) + 1; 
        for (let j = 0; j < numElements; j++) {
            const keyLetter = keyLetters[Math.floor(Math.random() * keyLetters.length)];
            const keyNumber = Math.floor(Math.random() * 9) + 1;
            keyElements.push(`${keyLetter}${keyNumber}`);
        }
        keys.push(keyElements.join(','));
    }
    const randomKey = keys.join(':');
    
    return randomKey;
}

export { generateRandomKey }