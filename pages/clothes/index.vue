<template>
  <b-container>
    <!--AddForm-->
    <b-button class="mb-2" variant="outline-success" @click="toggleAddForm = !toggleAddForm">Neues Kleidungsstueck</b-button>
    <ClothesAddForm class="mb-2" v-if="toggleAddForm" @close-add-form="toggleAddForm= false"></ClothesAddForm>

    <!--Lists all Clothes-->
    <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
      <b-col v-for="cloth in filtedClothes" :key="cloth.id">
        <NuxtLink class="router-link" :to="`/clothes/${cloth.id}`">
          <ClothesClothCard class="mb-2" :cloth="cloth" :show-details="true" :show-footer="true"></ClothesClothCard>
        </NuxtLink>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { ICloth } from '~~/types/cloth';
//Set Layout to Overview for the extra searchbar in the header
definePageMeta({
    layout:'overview',
});

//Reference to the input of the searchBar
const {searchInput} = useSearch()
const {clothes} = useClothes()

let toggleAddForm = ref(false);

//filters the Clothes depending on the searchInput
const filtedClothes = computed(() => clothes.value.filter((cloth) => {
  const searchInputLowerCase = searchInput.value.toLowerCase();

  //Check Name
  if(cloth.name.toLowerCase().includes(searchInputLowerCase)){
    return true
  }
  //Check Color
  if(cloth.color.toLowerCase().includes(searchInputLowerCase)) {
    return true
  }
  //Check Size
  if(cloth.size.includes(searchInputLowerCase)){
    return true
  }
  //Check Categories if no Categorie found returns false for the Methode
  return Array.prototype.some(cloth.categories, (categorie: String) => {categorie.toLowerCase().includes(searchInputLowerCase)})
}))
</script>

<style scoped lang="scss">

</style>