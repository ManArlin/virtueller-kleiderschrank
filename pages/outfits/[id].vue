<template>
       <b-container v-if="outfit">
              <h1 class="text-center">{{outfit.name}}</h1>
       <b-list-group>
            <b-list-group-item variant="secondary">
                <FormSelectItemsField :list="outfit.clothes" :list-name="clothesListName"></FormSelectItemsField>
            </b-list-group-item>
            <b-list-group-item variant="secondary">Bewertung: {{ outfit.rating }}</b-list-group-item>
            <b-list-group-item variant="secondary">
                <FormItemsListField :list="outfit.occasion" :list-name="occasionListName"></FormItemsListField>
            </b-list-group-item> 
       </b-list-group>
       </b-container>
</template>

<script setup lang="ts">
import { ICloth } from '~~/types/cloth';

const { getOutfitById } = useOutfits()
const {id} = useRoute().params

const clothesListName = "Kleidungsstücke"

const occasionListName = "Anlass"

const outfit = getOutfitById(parseInt(id.toString()))
</script>

<style scoped lang="scss">
    
</style>