<template>
    <b-container >
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
        <b-col v-for="outfit in filtereddOutfits" :key="outfit.id">
          <NuxtLink class="router-link" :to="`/outfits/${outfit.id}`">
            <OutfitsOutfitCard class="mb-3" :outfit="outfit"></OutfitsOutfitCard>
          </NuxtLink>
        </b-col>
      </b-row>

    <b-button variant="outline-success" @click="toggleAddForm = !toggleAddForm">Neues Outfit</b-button>
    <OutfitsAddForm v-if="toggleAddForm"></OutfitsAddForm>
    
  </b-container >
</template>

<script setup lang="ts">
import { IOutfit } from '~~/types/outfit';

definePageMeta({
    layout:'overview',
});

const {outfits} = useOutfits();
const {searchInput} = useSearch();

let toggleAddForm = ref(false);

const filtereddOutfits = computed(() => outfits.value.filter((outfit: IOutfit) => {
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