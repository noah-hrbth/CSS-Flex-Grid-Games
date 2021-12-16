<template>
    <div>
        <a v-on:click="goToFlex">Flex</a>
        <a v-on:click="goToGrid">Grid</a>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data: () => ({

    }),
    methods: {
        goToFlex(){
            this.$store.state.currentGame = 1;
        },
        goToGrid(){
            this.$store.state.currentGame = 2;
        }
    }
}
</script>

<style>

</style>