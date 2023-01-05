<template>
  <div>
    <b-container>
      <b-button class="mb-2" variant="outline-success" @click="toggleAddForm = !toggleAddForm">Neues Kleidungsstueck</b-button>
      <ClothesAddForm class="mb-2" v-if="toggleAddForm"></ClothesAddForm>

      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
        <b-col v-for="cloth in filtedClothes" :key="cloth.id">
          <NuxtLink class="router-link" :to="`/clothes/${cloth.id}`">
            <ClothesClothCard class="mb-2" :cloth="cloth" :show-details="true" :show-footer="true"></ClothesClothCard>
          </NuxtLink>
        </b-col>
      </b-row>
    </b-container>


  </div>

</template>

<script setup lang="ts">
import { ICloth } from '~~/types/cloth';
definePageMeta({
    layout:'overview',
});

const {searchInput} = useSearch()
const {clothes} = useClothes()

let toggleAddForm = ref(false);

const filtedClothes = computed(() => clothes.value.filter((cloth: ICloth) => {
  //Check Name
  if(cloth.name.toLowerCase().includes(searchInput.value.toLowerCase())){
    return true
  }
  //Check Color
  if(cloth.color.toLowerCase().includes(searchInput.value.toLowerCase())) {
    return true
  }
  //Check Size
  if(cloth.size.includes(searchInput.value)){
    return true
  }

  //Check Categories
  for(let index = 0; index < cloth.categories.length; index++) {
    if(cloth.categories[index].toLowerCase().includes(searchInput.value.toLowerCase())) {
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