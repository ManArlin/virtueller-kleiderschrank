<template>
    <div>
    <b-card v-if="cloth" border-variant="secondary" :title="cloth.name"
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
import { PropType, DeepReadonly } from 'vue'
import { ICloth } from '~~/types/cloth';

//showDetails and showFooter to determine if detailed information should be displayed
const {cloth, showDetails, showFooter} = defineProps({
    cloth: Object as PropType<DeepReadonly<ICloth>>,
    showDetails: Boolean,
    showFooter: Boolean
})
</script>