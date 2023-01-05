<!--Used have the Search Bar in the Header-->

<template>
    <div>
        <header class="border-bottom d-flex py-3 mb-4 justify-content-between">
            <NuxtLink class="router-link brand" to="/">
                <div class="brand text">
                    <img src="/images/formal-shirt-icon.svg" alt="" width="60" height="44"/>
                    <p>Virtueller Kleiderschrank</p>
                </div>
            </NuxtLink>
            <b-container>
                <b-form class="d-flex justify-content-center">
                        <b-form-input id="input-search" v-model="searchInput" placeholder="Suche" aria-label="Search"></b-form-input>
                </b-form>
            </b-container>
            <b-container class="side-links">
                <NuxtLink class="router-link mx-2" to="/clothes">
                    Kleidungsstücke
                </NuxtLink>
                <NuxtLink class="router-link mx-2" to="/outfits">
                    Outfits
                </NuxtLink>
            </b-container>
        </header>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const {searchInput} = useSearch();
</script>

<style lang="scss">
    .router-link {
        text-decoration: none;
        color: black;
    }

    li {
        margin: auto;
    }


    .side-links {
        margin: auto;
        max-width: 250px;
    }

    .brand {
        display: flex;
        justify-content: center;
        p {
            margin: auto;
            text-align: center;
        }
    }

    #input-search{
        max-width: 50%;
    }
</style>