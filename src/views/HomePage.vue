<template>
    <Carousel/>
    <CardsList/>
</template>

<script>
import CardsList from '@/components/CardsList';
import Carousel from '@/components/Carousel';

export default {
    name: 'HomePage',
    components: {
        CardsList,
        Carousel,
    },
}
</script>

<style>
</style>