<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
        <li class="navbar-nav">
            <a class="nav-link" href="#" >Sign in</a>
        </li>
    </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-light">
        <ul class="navbar-nav mx-auto text-center">
            <div class="dropdown bg-light">
                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    All Categories  
                </a>
                <ul class="dropdown-menu bg-light">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another Action</a></li>
                    <li><a class="dropdown-item" href="#">This is Last Action</a></li>
                </ul>
            </div>
            <li class="nav-item">
                <router-link :to="{path : '/'}" class="nav-link">All Products</router-link>
            </li>
            <li>
                <router-link class="nav-link" :to="{path: '/aboutus'}">About Us</router-link>
            </li>
            <li>
                <!-- <a class="nav-link" href="#">Contact Us</a> -->
                <router-link :to="{path : '/contactus'}" class="nav-link"> Contact Us</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style>
</style>