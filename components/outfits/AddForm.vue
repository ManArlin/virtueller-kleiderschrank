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

const {outfits, addOutfit} = useOutfits()

const clothesListName = "Kleidungsstuecke"

const occasionListName = "Anlass"

const form = reactive<INewOutfit>({
    name: "",
    clothes: [],
    rating: "0",
    occasion: []
})
const newOccasion= ref("")


function addOccasion() {
    if(newOccasion.value.trim().length <= 0) {
        //Text field ist empty, dont add a new empty Categorie
        return
    }
    form.occasion.push(newOccasion.value)
    newOccasion.value = ""
}

function formSubmit(event: Event) {
    addOutfit(toRaw(form))
}

function formReset(event: Event) {
    event.preventDefault()
    // Reset our form values
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

