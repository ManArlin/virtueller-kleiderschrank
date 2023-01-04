<template>
    <div>
    <header class="border-bottom d-flex py-3 mb-4 justify-content-between">

            <NuxtLink class="router-link brand" to="/">
                <div class="brand">
                    <img src="/images/formal-shirt-icon.svg" alt="" width="60" height="44"/>
                    <p>Virtueller Kleiderschrank</p>
                </div>
            </NuxtLink>


            <b-form class="d-flex">
                    <b-form-input id="input-search" v-model="inputSearch" placeholder="Search" aria-label="Search"></b-form-input>
            </b-form>

            <ul class="nav col-12 col-md-auto justify-content-center">
                <li>
                <NuxtLink class="router-link mx-2" to="/clothes">
                    Kleidungsstuecke
                </NuxtLink>
                </li>
                <li>
                <NuxtLink class="router-link mx-2" to="/outfits">
                    Outfits
                </NuxtLink>
                </li>
            </ul>

    </header>
    <slot/>
    </div>
</template>

<script setup lang="ts">
let inputSearch = ref("");

watch(inputSearch, (newInput, oldInput) => {
    console.log(newInput);
    console.log(oldInput)
})
</script>

<style scoped lang="scss">
    .router-link {
        text-decoration: none;
        color: black;
    }

    li {
        margin: auto;
    }

    .brand {
        display: flex;
        justify-content: center;
        p {
            margin: auto;
            text-align: center;
        }
    }
</style>