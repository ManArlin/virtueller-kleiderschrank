<template>
    <div>
    <header class="border-bottom d-flex py-3 mb-4 justify-content-between">
            <NuxtLink class="router-link brand" to="/">
                <div class="brand">
                    <img src="/images/formal-shirt-icon.svg" alt="" width="60" height="44"/>
                    <p>Virtueller Kleiderschrank</p>
                </div>
            </NuxtLink>
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

<style lang="scss">
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