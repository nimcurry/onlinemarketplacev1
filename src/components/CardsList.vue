<template>
    <div class="cards-list my-3">
        <Cards>
            
        </Cards>
    </div>
</template>

<script>
import Cards from './Cards.vue';

    export default {
        name: 'CardsList',
        components: {
            Cards,
        }
    }
</script>
<style>
.cards-list {
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }  
</style>