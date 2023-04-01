<template>
    <div class="card" style="width: 19rem;" v-for="(monsterRoladex, id) in totalId" :key="id">
        <!-- <h2>image1</h2> -->
        <!-- {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} -->
        <router-link :to="{ path: '/CardsDetails' }">
        <img class="card-img-top" alt="monster" v-bind:src="'https://robohash.org/' + monsterRoladex.id+ '?set=set2&size=180x180'" />
        </router-link>
        <p>{{ monsterRoladex.email }}</p>
        <p>{{ monsterRoladex.name }}</p>
        <!-- <router-link :to="{ path: '/CardsDetails' }"><button>View Details</button></router-link> -->
      </div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      totalId: []
    }
  },
  methods: {
    fetchingData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.totalId = data)
    //return {totalId};
    }
  },
  mounted() {
    this.fetchingData()
  }
}
</script>

<style>
.card-container {
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
    transition: transform 100ms ease-in;
    cursor: pointer;
  }
  
  .card-container:hover {
    transform: scale(1.07);
  }
</style>