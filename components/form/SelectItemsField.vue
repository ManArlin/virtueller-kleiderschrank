<template>
    <div>
        <!--Item List Field-->
        <b-form-group id="input-group-item-list" :label="`${listName}:`" label-for="input-item-list">
            <p>
                Hinzugefügt:
            </p>
            <b-list-group horizontal class="selected-items mb-2">
                <b-list-group-item class="selected-items align-items-start" variant="success" v-for="item in list"  button v-on:click="unselectItem(item)" ><ClothesClothCard :cloth="item"></ClothesClothCard></b-list-group-item>
            </b-list-group>
            <p>
                Noch Verfügbar:
            </p>
            <b-list-group horizontal class="selected-items mb-2">
                <b-list-group-item class="align-items-start" variant="warning" v-for="item in unselectedItems"  button v-on:click="selectItem(item)" ><ClothesClothCard :cloth="item"></ClothesClothCard></b-list-group-item>
            </b-list-group>
        </b-form-group>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ICloth } from '~~/types/cloth';

const {clothes} = useClothes();

let {listName, list} = defineProps({
    listName: {type:String, required: true},
    list: {type: Object as PropType<ICloth[]>, required: true},
})


const unselectedItems = computed(() => clothes.value.filter(cloth => !list.includes(cloth)));

function selectItem(item: ICloth) {
    list.push(item)
}

function unselectItem(item: ICloth) {
    const index = list.indexOf(item, 0)
    if (index > -1) {
        list.splice(index, 1)
    }
}
</script>