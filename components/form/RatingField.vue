<template>
    <div>
        <b-form-group id="input-group-rating" label="Gib deine Bewertung ab:" label-for="input-rating">
            <b-form-input id="input-rating" :value="rating" @input="$emit('update:rating', $event)" type="range" min="0" max="10"></b-form-input>
            <div class="mt-2">Bewertung: {{ rating }}</div>
        </b-form-group>
    </div>
    </template>
    
    <script setup lang="ts">
    const {rating} = defineProps({
        rating: {type: String, required: true}
    })
    
    defineEmits(['update:rating'])
    </script>