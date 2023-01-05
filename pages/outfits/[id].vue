<template>
    <h1>
        Detailansicht für Outfit: {{ outfit }}
    </h1>
</template>

<script setup lang="ts">
import { ICloth } from '~~/types/cloth';

const { getOutfitById } = useOutfits()
const {id} = useRoute().params

const outfit = getOutfitById(parseInt(id.toString()))
</script>

<style scoped lang="scss">
    
</style>