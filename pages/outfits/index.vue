<template>
    <b-container >
      <!--AddForm-->
      <b-button variant="outline-success" @click="toggleAddForm = !toggleAddForm">Neues Outfit</b-button>
      <OutfitsAddForm v-if="toggleAddForm" @close-add-form="toggleAddForm = false"></OutfitsAddForm>

      <!--Lists all Outfits-->
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
        <b-col v-for="outfit in filteredOutfits" :key="outfit.id">
          <NuxtLink class="router-link" :to="`/outfits/${outfit.id}`">
            <OutfitsOutfitCard class="mb-3" :outfit="outfit"></OutfitsOutfitCard>
          </NuxtLink>
        </b-col>
      </b-row>
  </b-container >
</template>

<script setup lang="ts">
import { IOutfit } from '~~/types/outfit';
//Set Layout to Overview for the extra searchbar in the header
definePageMeta({
    layout:'overview',
});

//Reference to the input of the searchBar
const {searchInput} = useSearch();
const {outfits} = useOutfits();

let toggleAddForm = ref(false);

//filters the Outftits depending on the searchInput
//Maybe add Check for searchInput matching with text from the clothes?
//Maybe it is possible to reuse the filteredClothes method in the other File 
const filteredOutfits = computed(() => outfits.value.filter((outfit: IOutfit) => {
  //Check Name
  if(outfit.name.toLowerCase().includes(searchInput.value.toLowerCase())){
    return true
  }
  //Check Categories
  for(let index = 0; index < outfit.occasion.length; index++) {
    if(outfit.occasion[index].toLowerCase().includes(searchInput.value.toLowerCase())) {
      console.log("Include Categorie");
      return true
    }
  }
  //No Match found
  return false
}))

</script>

<style scoped lang="scss">

</style>