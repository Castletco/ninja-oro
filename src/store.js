export default {
    quantity: {
        gold: 0,
        aux: 0,
        text: ''
    },
    clickFarm() {
        this.quantity.aux = Math.floor(Math.random() * 11) + 10;  // returns a random integer from 10 to 20
        this.quantity.gold += this.quantity.aux;
        this.quantity.text += `Earned ${aux} golds from the Farm! ()`
    },
    clickCave() {
        this.quantity.gold += Math.floor(Math.random() * 6) + 5;  // returns a random integer from 5 to 10;
    },
    clickHouse() {
        this.quantity.gold += Math.floor(Math.random() * 4) + 2;  // returns a random integer from 2 to 5;
    },
    clickCasino() {
        this.quantity.gold += Math.floor(Math.random() * 101) - 50;  // returns a random integer from 2 to 5;
    }
};