<template>
    <div>
        <b-card v-if="cloth"
        border-variant="secondary"
        :title="cloth.name"
        :subtitle="cloth.categories.toString()"
        align="center">
        <b-card-text>
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.
        </b-card-text>
        </b-card>
        
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ICloth } from '~~/types/cloth';

const props = defineProps({
    cloth: Object as PropType<ICloth>
})

</script>

<style lang="scss" scoped>

</style>