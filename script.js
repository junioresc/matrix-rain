const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Used to create and draw individual symbols on the screen that make up the rain effect.
class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ☀☁❆❅❄♔♕♖♗♘♙';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw() {
        this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
        context.fillStyle = '#0aff0a';
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        // If the letters get to the bottom of the screen then reset them to the top
        if (this.y * this.fontSize > this.canvasHeight) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

// Includes fuctionality to create delete and update all symbols on the screen
class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
    }
    #initialize() {
        for (let i = 0; i < this.columns.length; i++) {
            this.symbols[i] = new Symbol();
        }
    }
}

const animate = () => {

}