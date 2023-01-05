<template>
<div>
    <b-form-group id="input-group-name" label="Name:" label-for="input-name">
        <b-form-input id="input-name" :value="name" @input="$emit('update:name', $event)" type="text"
        placeholder="Gib den Namen ein..." required ></b-form-input>
    </b-form-group>
</div>
</template>

<script setup lang="ts">
const {name} = defineProps({
    name: {type: String, required: true}
})
defineEmits(['update:name'])

</script>