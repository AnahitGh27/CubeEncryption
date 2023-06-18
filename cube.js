class Cube
{
    constructor(string) {
        this.str = string;
    }
    
    up() {
        const newStr = (this.str[3] + this.str[2] + this.str[6] + this.str[7] + 
            this.str[0] + this.str[1] + this.str[5] + this.str[4]);
        this.str = newStr; 
        return this;
    }

    down() {
        const newStr = (this.str[4] + this.str[5] + this.str[1] + this.str[0] + 
            this.str[7] + this.str[6] + this.str[2] + this.str[3]);
        this.str = newStr;
        return this;
    }

    right() {
        const newStr = (this.str[4] + this.str[0] + this.str[3] + this.str[7] + 
            this.str[5] + this.str[1] + this.str[2] + this.str[6]);
        this.str = newStr;
        return this;
    }

    left() {
        const newStr = (this.str[1] + this.str[5] + this.str[6] + this.str[2] + 
            this.str[0] + this.str[4] + this.str[7] + this.str[3]);
        this.str = newStr;
        return this;
    }

    toString() {
        return this.str;
    }
}

export { Cube } 
