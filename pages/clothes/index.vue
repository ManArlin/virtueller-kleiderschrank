<template>
  <div>
    <b-card-group deck>
      <ClothesClothCard :title="title" :subTitle="subTitle">

      </ClothesClothCard>
      <ClothesClothCard :title="title" :subTitle="subTitle"></ClothesClothCard>
      <ClothesClothCard :title="title" :subTitle="subTitle"></ClothesClothCard>
    </b-card-group>

    <b-button variant="outline-success" @click="toggleAddForm = !toggleAddForm">Neues Kleidungsstueck</b-button>
    <ClothesAddForm v-if="toggleAddForm"></ClothesAddForm>
    
  </div>

</template>

<script setup lang="ts">
definePageMeta({
    layout:'overview',
});

let toggleAddForm = ref(false);

const title = "Weißer Pullover"
const subTitle = "Mit großem blauem M in der Mitte"
</script>

<style scoped lang="scss">

</style>