export class Volume {
    private off = 0;
    private high = 20;
    private level: number;

    constructor() {
        this.level = this.off;
    }

    raiseLevel(): void {
        if (this.level < this.high) {
            this.level++;
            console.log(`Уровень звука ${this.level}`);
        }
    }

    dropLevel(): void {
        if (this.level > this.off) {
            this.level--;
            console.log(`Уровень звука ${this.level}`);
        }
    }
}