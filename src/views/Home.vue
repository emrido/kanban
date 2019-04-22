<template>
  <div class="home">
    <MainHeader></MainHeader>
    <div class="container">
      <div class="container-card">
        <KanbanCard v-for="(data,index) in taskLists" :key="index" :data="data"></KanbanCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import KanbanCard from '@/components/KanbanCard.vue'
import database from '../assets/config.js'
const taskData = [
  {
    name: 'Idea',
    tasks: []
  },
  {
    name: 'Todo',
    tasks: []
  },
  {
    name: 'Doing',
    tasks: []
  },
  {
    name: 'Finished',
    tasks: []
  }
]
var leadsRef = database.ref('/')
leadsRef.on('value', function(snapshot) {
  taskData[0].tasks = []
  taskData[1].tasks = []
  taskData[2].tasks = []
  taskData[3].tasks = []
  snapshot.forEach(function(childSnapshot) {
    if (childSnapshot.val().status === 'Idea') {
      const obj = childSnapshot.val()
      obj.id = childSnapshot.key
      taskData[0].tasks.push(obj)
    } else if (childSnapshot.val().status === 'Todo') {
      const obj = childSnapshot.val()
      obj.id = childSnapshot.key
      taskData[1].tasks.push(obj)
    } else if (childSnapshot.val().status === 'Doing') {
      const obj = childSnapshot.val()
      obj.id = childSnapshot.key
      taskData[2].tasks.push(obj)
    } else {
      const obj = childSnapshot.val()
      obj.id = childSnapshot.key
      taskData[3].tasks.push(obj)
    }
  })
})
export default {
  name: 'home',
  components: {
    MainHeader,
    KanbanCard
  },
  data: function() {
    return {
      taskLists: taskData
    }
  },
  methods: {},
  created() {},
  mounted() {}
}
</script>

<style>
.container-card {
  margin-top: 30px;
  padding-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 90%;
  grid-gap: 20px;
}

@media only screen and (max-width: 800px) {
  .container-card {
    display: block;
  }
}
</style>
