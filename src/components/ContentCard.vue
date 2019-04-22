
<template>
  <div class="cardContent">
    <h2>{{item.title}}</h2>
    <div class="container-button">
      <div>
        <h4 @click="removeItem">Delete</h4>
      </div>

      <div>
        <h4 @click="actionOne">{{buttonOne}}</h4>
      </div>

      <div>
        <h4 @click="actionTwo" v-if="buttonTwo">{{buttonTwo}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import database from '../assets/config.js'
export default {
  name: 'ContentCard',
  data: function() {
    return {
      buttonOne: '',
      buttonTwo: ''
    }
  },
  props: ['item', 'name'],
  methods: {
    actionOne() {
      database.ref(`/${this.item.id}`).remove()
      database.ref('/').push({
        title: this.item.title,
        status: this.buttonOne
      })
    },
    actionTwo() {
      database.ref(`/${this.item.id}`).remove()
      database.ref('/').push({
        title: this.item.title,
        status: this.buttonTwo
      })
    },
    removeItem() {
      database.ref(`/${this.item.id}`).remove()
    }
  },
  created() {
    if (this.name === 'Idea') {
      this.buttonOne = 'Todo'
      this.buttonTwo = null
    } else if (this.name === 'Todo') {
      this.buttonOne = 'Idea'
      this.buttonTwo = 'Doing'
    } else if (this.name === 'Doing') {
      this.buttonOne = 'Finished'
      this.buttonTwo = 'Todo'
    } else if (this.name === 'Finished') {
      this.buttonOne = 'Doing'
      this.buttonTwo = null
    }
  }
}
</script>

<style scoped>
.cardContent {
  font-size: 10px;
  color: #fff;
  width: 70%;
  min-height: 100px;
  background-color: burlywood;
  -webkit-box-shadow: 0px 5px 4px #c0c0c09d;
  -moz-box-shadow: 0px 5px 4px #c0c0c09d;
  box-shadow: 0px 5px 4px #c0c0c09d;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 50px;
  vertical-align: middle;
  cursor: pointer;
  padding-bottom: 20px;
}
.card h2 {
  padding-top: 20px;
  font-size: 20px;
}
.container-button h4 {
  color: black;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 30%;
  padding: 2%;
}
</style>