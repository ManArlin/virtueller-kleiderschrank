<template>
    <div>
    <header class="border-bottom d-flex py-3 mb-4 justify-content-between">
        <NuxtLink class="router-link brand" to="/">
            <div class="brand text">
                <img src="/images/formal-shirt-icon.svg" alt="" width="60" height="44"/>
                <p>Virtueller Kleiderschrank</p>
            </div>
        </NuxtLink>
        <b-container></b-container>
        <b-container class="side-links">
            <NuxtLink class="router-link mx-2" to="/clothes">
                Kleidungsstücke
            </NuxtLink>
            <NuxtLink class="router-link mx-2" to="/outfits">
                Outfits
            </NuxtLink>
        </b-container>
    </header>
    <slot/>
    </div>
</template>

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
</style>