export default {
    quantity: {
        gold: 0,
        aux: 0,
        text: ''
    },
    clickFarm() {
        this.quantity.aux = Math.floor(Math.random() * 11) + 10;  // returns a random integer from 10 to 20
        this.quantity.text += `Earned ${this.quantity.aux} golds from the Farm!\n`;
        this.quantity.gold += this.quantity.aux;
        this.quantity.aux = 0;    
    },
    clickCave() {
        this.quantity.aux += Math.floor(Math.random() * 6) + 5;  // returns a random integer from 5 to 10;
        this.quantity.text += `Earned ${this.quantity.aux} golds from the Cave!\n`;
        this.quantity.gold += this.quantity.aux;
        this.quantity.aux = 0;        
    },
    clickHouse() {
        this.quantity.aux += Math.floor(Math.random() * 4) + 2;  // returns a random integer from 2 to 5;
        this.quantity.text += `Earned ${this.quantity.aux} golds from the House!\n`;
        this.quantity.gold += this.quantity.aux;
        this.quantity.aux = 0;    
    },
    clickCasino() {
        this.quantity.aux += Math.floor(Math.random() * 101) - 50;  // returns a random integer from 2 to 5;
        if (this.quantity.aux > 0) {
            this.quantity.text += `Earned ${this.quantity.aux} golds at the Casino!\n`;
        } else {
            this.quantity.text += `Lost ${this.quantity.aux * -1} golds at the Casino!\n`;
        }
        this.quantity.gold += this.quantity.aux;
        this.quantity.aux = 0;     
    }
};