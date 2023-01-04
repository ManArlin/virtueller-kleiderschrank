<template>
    <div>
        <b-card
        border-variant="secondary"
        header="Secondary"
        header-border-variant="secondary"
        :title="title"
        :sub-title="subTitle"
        align="center">
        <b-card-text>
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.
    </b-card-text>
        </b-card>
        
    </div>
</template>

<script setup lang="ts">
import { stringLiteral } from '@babel/types';

const props = defineProps({
    title: String,
    subTitle: String,
})

</script>

<style lang="scss" scoped>

</style>