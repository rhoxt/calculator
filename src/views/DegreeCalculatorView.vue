<script setup>
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { ref, watch } from 'vue';

let firstNumber = ref(5);
let secondNumber = ref();

watch(firstNumber, (newValue, oldValue) => {
  secondNumber.value = newValue*2
})

watch(secondNumber, (newValue, oldValue) => {
  firstNumber.value = newValue / 2
})

function handleClick(event) {
  alert(firstNumber.value);
}

</script>

<template>
  <main>
    <InputNumber v-model="firstNumber"/>
    <InputNumber v-model="secondNumber"/>
    <Button label="FEUER FREI" @click="handleClick($event)"/>
  </main>
</template>
