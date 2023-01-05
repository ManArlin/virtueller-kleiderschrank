<template>
    <b-container>
        <b-form @submit="formSubmit" @reset="formReset">
            <!--Name Field-->
            <FormNameField v-model:name="form.name"></FormNameField>   
            
            <!--Add Clothes Field-->
            <FormSelectItemsField :list-name="clothesListName" :list="form.clothes"></FormSelectItemsField>

            <!--Rating Field-->
            <FormRatingField v-model:rating="form.rating"></FormRatingField>

            <!--Occasion Field-->
            <FormItemsListField :list="form.occasion" :list-name="occasionListName"></FormItemsListField>

            <b-button class="mx-1" type="submit" variant="primary">Hinzufuegen</b-button>
            <b-button type="reset" variant="danger">Zuruecksetzen</b-button>
        </b-form>
    </b-container>
</template>

<script setup lang="ts">
import {INewOutfit } from "~/types/outfit"

const {addOutfit} = useOutfits()

const emit = defineEmits(['closeAddForm'])

//Variables passed to Components to define the Output String
const clothesListName = "Kleidungsstuecke"
const occasionListName = "Anlass"

const newOccasion= ref("")

const form = reactive<INewOutfit>({
    name: "",
    clothes: [],
    rating: "0",
    occasion: []
})

//Adds the new Outfit to the outfit list
function formSubmit(event: Event) {
    addOutfit(toRaw(form))
    emit('closeAddForm')
}

//Resets all form values
function formReset(event: Event) {
    event.preventDefault()
    form.name= ""
    form.clothes= []
    form.rating= "0"
    form.occasion= []
    newOccasion.value = ""
}
</script>

<style lang="scss">
    .form-label {
        font-weight: bold;
    }
</style>

