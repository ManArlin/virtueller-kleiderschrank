<template>
    <b-container>
        <b-form @submit="addCloth" @reset="formReset">
            <!--Name Field-->
            <b-form-group id="input-group-name" label="Name:" label-for="input-name">
                <b-form-input id="input-name" v-model="reactiveForm.name" type="text"
                placeholder="Gib den Namen deines Kleidungsstueck ein" required ></b-form-input>
            </b-form-group>
            <!--Size Select-->
            <b-form-group id="select-group-size" label="Groesse:" label-for="select-size">
                <b-form-select id="select-size" v-model="reactiveForm.size" :options="sizeOptions" required>
            </b-form-select>
            </b-form-group>
            <strong>{{reactiveForm.size}}</strong>
            <!--Color Field-->
            <b-form-group id="input-group-color" label="Farbe:" label-for="input-color">
                <b-form-input id="input-color" v-model="reactiveForm.color" type="text"
                placeholder="Gib die Farbe deines Kleidungsstueck ein" required ></b-form-input>
            </b-form-group>
            <!--Rating Field-->
            <b-form-group id="input-group-name" label="Gib deine Bewertung fuer dein Kleidungsstueck ein:" label-for="input-name">
                <b-form-input id="input-name" v-model="reactiveForm.rating" type="range" min="0" max="10"></b-form-input>
                <div class="mt-2">Bewertung: {{ reactiveForm.rating }}</div>
            </b-form-group>
            <!--Categorie Field-->
            
            <b-form-group id="input-group-categorie" label="Kategorien:" label-for="input-categorie">
                <b-list-group horizontal class="mb-2">
                    <b-list-group-item variant="warning" v-for="categorie in reactiveForm.categories">{{categorie}}</b-list-group-item>
                </b-list-group>
                <b-row>
                    <b-col cols="8">
                        <b-form-input id="input-categorie" v-model="newCategorie" type="text"
                        placeholder="Gib Kategorien ein die dem Kleidungsstueck zugehoeren." required ></b-form-input>
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
enum Size {
    XS ="XS",
    S ="S",
    M ="M",
    L ="L",
    XL ="XL",
    XXL ="XXL"
}

interface ICloth {
    name: string;
    size: Size;
    color: string;
    rating: number;
    categories: string[]; 
}

let form: ICloth = {
    name: "",
    size: Size.M,
    color: "",
    rating: 0,
    categories: []
}

let reactiveForm = reactive(form);
let newCategorie = ""

function addCategorie() {
    reactiveForm.categories.push(newCategorie);
    console.log(newCategorie);
}

function addCloth(event: Event) {
    event.preventDefault();
    alert(JSON.stringify(form));
}

function formReset(event: Event) {
    event.preventDefault()
    // Reset our form values
    reactiveForm.name= "",
    reactiveForm.size= Size.M,
    reactiveForm.color= "",
    reactiveForm.rating= 0,
    reactiveForm.categories = []
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

