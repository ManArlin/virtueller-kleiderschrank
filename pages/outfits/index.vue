<template>
    <div container>
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
        <b-col v-for="outfit in outfits">
          
        </b-col>
      </b-row>

    <b-button variant="outline-success" @click="toggleAddForm = !toggleAddForm">Neues Outfit</b-button>
    <OutfitsAddForm v-if="toggleAddForm"></OutfitsAddForm>
    
  </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:'overview',
});

let toggleAddForm = ref(false);

const {outfits} = useOutfits();
</script>

<style scoped lang="scss">

</style>