<template>
  <b-container>
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-brand href="#">Ninja-Gold</b-navbar-brand>
    </b-navbar>
    <div>
      <div id="goldTag">Your Gold:</div>
      <span :class="{green: gold > 0, red: gold < 0}">{{ gold }}</span>
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
          placeholder="Enter something..."
          v-model="text"
          rows="3"
          max-rows="6"
        >{{text}}</b-form-textarea>
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
    },
    clickCave() {
      store.clickCave();
    },
    clickHouse() {
      store.clickHouse();
    },
    clickCasino() {
      store.clickCasino();
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
.green {
  color: green;
}
.red {
  color: red;
}
span {
  display: inline-block;
}
#goldTag {
  display: inline-block
}
</style>
