<template>
    <div id="carouselExampleControls" class="carousel slide my-3" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <!-- <div class="container"> -->
                    <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" class="d-block w-100" alt="..."/>
                <!-- </div> -->
            </div>
            <div class="carousel-item">
                <!-- <div class="container"> -->
                    <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" class="d-block w-100" alt="..."/>
                <!-- </div> -->
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Carousel',
    }
</script>

<style>
.carousel-item img {
  object-fit: cover;
  object-position: center;
  height: 50vh;
  overflow: hidden;
}
</style>