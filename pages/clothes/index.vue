<template>
  <div>
    <div container>
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
        <b-col v-for="cloth in clothes">
          <ClothesClothCard class="mb-2" :cloth="cloth" :show-details="true" :show-footer="true"></ClothesClothCard>
        </b-col>
      </b-row>
    </div>

    <b-button variant="outline-success" @click="toggleAddForm = !toggleAddForm">Neues Kleidungsstueck</b-button>
    <ClothesAddForm v-if="toggleAddForm"></ClothesAddForm>
    
  </div>

</template>

<script setup lang="ts">
definePageMeta({
    layout:'overview',
});

const {clothes} = useClothes()

let toggleAddForm = ref(false);

const title = "Weißer Pullover"
const subTitle = "Mit großem blauem M in der Mitte"
</script>

<style scoped lang="scss">

</style>