<!--Error Page-->

<template>
    <b-container class="mt-4 text-center">
        <div class="error-container">
            <img src="/images/sad-face-icon.svg" width="400"/>
            <p class="status-code">{{ error.statusCode }}</p>
            <h1>Leider konnte die seite nicht gefunden werden.</h1>
            <h2>{{ error.message }}</h2>
            <NuxtLink to="/">Zur Startseite</NuxtLink>
        </div>
    </b-container>
</template>

<script setup lang="ts">
defineProps(['error'])
</script>

<style lang="scss" scoped>
    .status-code {
        font-size: 80px;
        font-weight: bold;
    }
</style>