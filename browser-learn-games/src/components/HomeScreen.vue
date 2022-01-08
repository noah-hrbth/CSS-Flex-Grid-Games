<template>
    <div class="home">
        <Navigation />
    </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
    components: { 
        Navigation 
    },
    name: 'HomeScreen',
    props: {

    }
}
</script>

<style>
body {
    background-color: #cccccc
}

.home {
    height: 100vh;
    width: 100vw;
}

.navigation {
    width: 60%;
    height: 20vh;
    margin: auto;
    align-content: center;
    display: block;
    border: 1px solid black;
}

.link_button {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    background-color: white;
    border: 1px solid black;
    padding: 1rem;
    align-content: center;
    text-align: center;
}

</style>
