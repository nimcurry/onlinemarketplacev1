<template>
<AppHeader></AppHeader>

<router-view>
</router-view>
<AppFooter></AppFooter>

  <!-- <Carousel></Carousel> -->
  <!-- <div class="container"> -->
    <!-- <SearchBar></SearchBar> -->
    <!-- <CardsList></CardsList> -->
  <!-- </div> -->
</template>

<script>
//import SearchBar from './components/SearchBar.vue';
//import CardsList from './components/CardsList.vue';
import AppHeader from './components/AppHeader.vue';
//import Carousel from './components/Carousel.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    //SearchBar,
    //CardsList,
    AppHeader,
    //Carousel,
    AppFooter,
  },
  data(){
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style>
#App {
  font-family: 'Courier New', Courier, monospace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
