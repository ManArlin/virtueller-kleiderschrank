<template>
    <div>
        <b-card v-if="outfit" border-variant="secondary" :title="outfit.name"
        :subtitle="outfit.occasion.toString()" footer-tag="footer" align="center">
            <b-card-text>
                Kleidungsstücke:
                <!--Nested Card Group to show all Clothes-->
                <b-card-group v-for="cloth in outfit.clothes">
                    <NuxtLink class="router-link" :to="`/clothes/${cloth.id}`">
                    <ClothesClothCard :cloth="cloth" :show-details="false" :show-footer="false"></ClothesClothCard>
                    </NuxtLink>
                </b-card-group>
            </b-card-text>
        <template #footer>
            <em>Bewertung: {{ outfit.rating }}</em>
        </template>
        </b-card>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IOutfit } from '~~/types/outfit';

const props = defineProps({
    outfit: Object as PropType<IOutfit>
})
</script>