<!--Detaislpage for Clothes-->

<template>
       <b-container v-if="cloth">
              <h1 class="text-center">{{cloth.name}}</h1>
       <b-list-group>
              <b-list-group-item variant="secondary">Farbe: {{ cloth.color }}</b-list-group-item>
              <b-list-group-item variant="secondary">Größe: {{ cloth.size }}</b-list-group-item>
              <b-list-group-item variant="secondary">Bewertung: {{ cloth.rating }}</b-list-group-item>
              <b-list-group-item variant="secondary">
                     <FormItemsListField :list="cloth.categories" :list-name="categoriesListName"></FormItemsListField>
              </b-list-group-item> 

       </b-list-group>
       

       </b-container> 
</template>

<script setup lang="ts">

const categoriesListName = "Kategorie"

const { getClothById } = useClothes()
const {id} = useRoute().params

const clothId = parseInt(id.toString())

if(isNaN(clothId)) {
       throw createError({statusCode: 404, statusMessage: 'ID ungueltig'})
}

const cloth = getClothById(clothId)

if(!cloth) {
       throw createError({statusCode: 404, statusMessage: 'Kleidungsstück nicht gefunden'})
}

</script>

<style scoped lang="scss">
</style>