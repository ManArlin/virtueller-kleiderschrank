<template>
    <div>
    <b-card v-if="cloth"
    border-variant="secondary" :title="cloth.name"
    :subtitle="cloth.categories.toString()" footer-tag="footer" align="center">
        <div v-if="showDetails">
            <b-card-text>
                Farbe: {{ cloth.color }}
            </b-card-text>
            <b-card-text>
                Größe: {{ cloth.size }}
            </b-card-text>
        </div>  
      <template #footer v-if="showFooter">
        <em>Bewertung: {{ cloth.rating }}</em>
      </template>
    </b-card>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ICloth } from '~~/types/cloth';

const props = defineProps({
    cloth: Object as PropType<ICloth>,
    showDetails: Boolean,
    showFooter: Boolean
})

</script>

<style lang="scss" scoped>

</style>