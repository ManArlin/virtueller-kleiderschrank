<template>
    <b-container>
        <b-form @submit="addCloth" @reset="formReset">
            <!--Name Field-->
            <b-form-group id="input-group-name" label="Name:" label-for="input-name">
                <b-form-input id="input-name" v-model="form.name" type="text"
                placeholder="Gib den Namen deines Kleidungsstueck ein" required ></b-form-input>
            </b-form-group>
            <!--Size Select-->
            <b-form-group id="select-group-size" label="Groesse:" label-for="select-size">
                <b-form-select id="select-size" v-model="form.size" :options="sizeOptions" required>
            </b-form-select>
            </b-form-group>
            <strong>{{form.size}}</strong>
            <!--Color Field-->
            <b-form-group id="input-group-color" label="Farbe:" label-for="input-color">
                <b-form-input id="input-color" v-model="form.color" type="text"
                placeholder="Gib die Farbe deines Kleidungsstueck ein" required ></b-form-input>
            </b-form-group>
            <!--Rating Field-->
            <b-form-group id="input-group-name" label="Gib deine Bewertung fuer dein Kleidungsstueck ein:" label-for="input-name">
                <b-form-input id="input-name" v-model="form.rating" type="range" min="0" max="10"></b-form-input>
                <div class="mt-2">Bewertung: {{ form.rating }}</div>
            </b-form-group>
            <!--Categorie Field-->
            
            <b-form-group id="input-group-categorie" label="Kategorien:" label-for="input-categorie">
                <b-list-group horizontal class="mb-2">
                    <b-list-group-item variant="warning" v-for="categorie in showAddedCategories">{{categorie}}</b-list-group-item>
                </b-list-group>
                <b-row>
                    <b-col cols="8">
                        <b-form-input id="input-categorie" v-model="newCategorie" type="text"
                        placeholder="Gib Kategorien ein die dem Kleidungsstueck zugehoeren." ></b-form-input>
                    </b-col>
                    <b-col cols="4">
                        <b-button variant="outline-primary" @click="addCategorie">Kategorie hinzufuegen</b-button>
                    </b-col>
                </b-row>
            </b-form-group>

            <b-button type="submit" variant="primary">Hinzufuegen</b-button>
            <b-button type="reset" variant="danger">Zuruecksetzen</b-button>

        </b-form>
    </b-container>
</template>

<script setup lang="ts">
import {Size, ICloth} from "~/types/cloth"

const {clothes, addClothes} = useClothes()

const showAddedCategories = ref<string[]>([])

const form: ICloth= {
    name: "",
    size: Size.M,
    color: "",
    rating: 0,
    categories: []
}

const newCategorie = ref("")

function addCategorie() {
    form.categories.push(newCategorie.value)
    //Used to display the added Categories in the from. form.categories cant be reactive, because of the ICloth interface 
    showAddedCategories.value.push(newCategorie.value)
    console.log(newCategorie.value)
    newCategorie.value = ""
}

function addCloth(event: Event) {
    event.preventDefault()
    addClothes(form)
}

function formReset(event: Event) {
    event.preventDefault()
    // Reset our form values
    form.name= "",
    form.size= Size.M,
    form.color= "",
    form.rating= 0,
    form.categories = []
    newCategorie.value = ""
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

<style lang="scss" scoped>

</style>

