<template>
    <b-container>
        <b-form @submit="formSubmit" @reset="formReset">

            <!--Name Field-->
            <FormNameField v-model:name="form.name"></FormNameField>   

            <!--Rating Field-->
            <FormRatingField v-model:rating="form.rating"></FormRatingField>

            <!--Size Select-->
            <b-form-group id="select-group-size" label="Größe:" label-for="select-size">
                <b-form-select id="select-size" v-model="form.size" :options="sizeOptions" required>
            </b-form-select>

            <!--Color Field-->
            </b-form-group>
            <b-form-group id="input-group-color" label="Farbe:" label-for="input-color">
                <b-form-input id="input-color" v-model="form.color" type="text"
                placeholder="Gib die Farbe deines Kleidungsstueck ein" required ></b-form-input>
            </b-form-group>

            <!--Categorie Field-->
            <FormItemsListField :list="form.categories" :list-name="listName"></FormItemsListField>

            <b-button class="mx-1" type="submit" variant="primary">Hinzufuegen</b-button>
            <b-button type="reset" variant="danger">Zuruecksetzen</b-button>

        </b-form>
    </b-container>
</template>

<script setup lang="ts">
import {Size, INewCloth} from "~/types/cloth"
const {clothes, addCloth} = useClothes()

//Variable passed to the FormItemsListField Component to define the Output String
const listName: string ="Kategorie"

const form = reactive<INewCloth>({
    name: "",
    size: Size.M,
    color: "",
    rating: "0",
    categories: []
})

//Adds the new Cloth to the cloth list
function formSubmit(event: Event) {
    addCloth(toRaw(form))
}

//Resets all form values
function formReset(event: Event) {
    event.preventDefault()
    form.name= "",
    form.size= Size.M,
    form.color= "",
    form.rating= "",
    form.categories = []
}

const sizeOptions = [
    { value: Size.XS, text: "XS" },
    { value: Size.S, text: "S" },
    { value: Size.M, text: "M" },
    { value: Size.L, text: "L" },
    { value: Size.XL, text: "XL" },
    { value: Size.XL, text: "XXL" }
]
</script>

<style lang="scss">
    .form-label {
        font-weight: bold;
    }
</style>

