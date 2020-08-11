let dateFormat = require('dateformat');
let now = new Date();
let fechaFormat = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");


export default {
    quantity: {
        gold: 0,
        aux: 0,
        text: '',
        fecha: fechaFormat
    },
    clickFarm() {
        this.quantity.aux = 0;
        this.quantity.aux = Math.floor(Math.random() * 11) + 10;  // returns a random integer from 10 to 20
        this.quantity.text += `Earned ${this.quantity.aux} golds from the Farm! ${this.quantity.fecha}\n`;
        this.quantity.gold += this.quantity.aux;           
    },
    clickCave() {
        this.quantity.aux = 0;
        this.quantity.aux += Math.floor(Math.random() * 6) + 5;  // returns a random integer from 5 to 10;
        this.quantity.text += `Earned ${this.quantity.aux} golds from the Cave! ${this.quantity.fecha}\n`;
        this.quantity.gold += this.quantity.aux;               
    },
    clickHouse() {
        this.quantity.aux = 0;
        this.quantity.aux += Math.floor(Math.random() * 4) + 2;  // returns a random integer from 2 to 5;
        this.quantity.text += `Earned ${this.quantity.aux} golds from the House! ${this.quantity.fecha}\n`;
        this.quantity.gold += this.quantity.aux;          
    },
    clickCasino() {
        this.quantity.aux = 0;
        this.quantity.aux += Math.floor(Math.random() * 101) - 50;  // returns a random integer from 2 to 5;
        if (this.quantity.aux > 0) {
            this.quantity.text += `Earned ${this.quantity.aux} golds at the Casino! ${this.quantity.fecha}\n`;
        } else {
            this.quantity.text += `Lost ${this.quantity.aux * -1} golds at the Casino! ${this.quantity.fecha}\n`;
        }
        this.quantity.gold += this.quantity.aux;
    }
};