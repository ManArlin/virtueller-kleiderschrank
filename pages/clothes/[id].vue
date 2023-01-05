<template>
       <b-container v-if="cloth">
        <h1>Detailansicht für: {{cloth}}</h1>
       </b-container> 
</template>

<script setup lang="ts">

const { getClothById } = useClothes()
const {id} = useRoute().params

const cloth = getClothById(parseInt(id.toString()))

</script>

<style scoped lang="scss">

</style>