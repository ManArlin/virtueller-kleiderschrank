<template>
    <div>
        <!--Item List Field-->
        <b-form-group id="input-group-item-list" :label="`${listName}:`" label-for="input-item-list">
            <b-list-group horizontal class="mb-2">
                <b-list-group-item variant="warning" v-for="item in list">{{item}}</b-list-group-item>
            </b-list-group>
            <b-row>
                <b-col cols="8">
                    <b-form-input id="input-item-list" v-model.trim="newItem" type="text"
                    :placeholder="`Enter ${listName}...`" ></b-form-input>
                </b-col>
                <b-col cols="4">
                    <b-button variant="outline-primary" @click="addItem">{{ listName }} hinzufuegen</b-button>
                </b-col>
            </b-row>
        </b-form-group>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const {list, listName} = defineProps({
    listName: {type: String, required: true},
    list: {type: Object as PropType<String[]>, required: true}
})
const test ="Test"
console.log(listName);
console.log(list);


const newItem = ref("")

function addItem() {
    if(newItem.value.length > 0) {
        list.push(newItem.value)
        newItem.value = ""
    }
}

</script>

<style lang="scss" scoped>

</style>