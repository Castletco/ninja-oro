<template>
  <b-container>
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-brand href="#">Ninja</b-navbar-brand>
    </b-navbar>
    <div>
      <div class="mt-2">Your Gold: {{ gold }}</div>
    </div>
    <b-card-group deck>
      <b-card title="Farm" >
        <b-card-text>(earns 10-20 golds)</b-card-text>
        <b-button @click="clickFarm()" variant="primary">Find Gold!</b-button>
      </b-card>
      <b-card title="Cave">
        <b-card-text>(earns 5-10 golds)</b-card-text>
        <b-button @click="clickCave()" variant="primary">Find Gold!</b-button>
      </b-card>
      <b-card title="House">
        <b-card-text>(earns 2-5 golds)</b-card-text>
        <b-button @click="clickHouse()" variant="primary">Find Gold!</b-button>
      </b-card>
      <b-card title="Casino">
        <b-card-text>(earns/takes 0-50 golds)</b-card-text>
        <b-button @click="clickCasino()" variant="primary">Find Gold!</b-button>
      </b-card>
    </b-card-group>
    <b-row>
      <b-col sm="1">
        <label for="textarea">Activities:</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          id="textarea"
          text="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import store from '@/store';

export default {
  name: 'HelloWorld',
  props: {
    gold: Number,
    text: String,
    aux: Number
  },
  methods: {
    clickFarm() {
      store.clickFarm();
      console.log(store.quantity.text);
    },
    clickCave() {
      store.clickCave();
      console.log(store.quantity.text);
    },
    clickHouse() {
      store.clickHouse();
      console.log(store.quantity.text);
    },
    clickCasino() {
      store.clickCasino();
      console.log(store.quantity.text);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #6b2db3;
}
</style>
