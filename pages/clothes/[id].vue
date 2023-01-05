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
       <b-button class="my-2 mx-2" variant="danger" @click="deleteItem">Kleidungsstück löschen</b-button>
       </b-container> 
</template>

<script setup lang="ts">

const { getClothById, deleteCloth } = useClothes()
const {id} = useRoute().params

const categoriesListName = "Kategorie"

//Check if Valid Id
const clothId = parseInt(id.toString())
if(isNaN(clothId)) {
       throw createError({statusCode: 404, statusMessage: 'ID ungueltig'})
}
const cloth = getClothById(clothId)
if(!cloth) {
       throw createError({statusCode: 404, statusMessage: 'Kleidungsstück nicht gefunden'})
}

//Deletes the Cloth from the list and redirects to the cloth overview page
function deleteItem() {
       if(cloth) deleteCloth(cloth)
       const router = useRouter()
       router.push('/clothes')
}
</script>

<style scoped lang="scss">
</style>