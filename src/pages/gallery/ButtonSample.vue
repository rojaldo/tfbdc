<template>
    <div>
        <button @click="handleClick">Click me!</button>
        {{ message }}
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const message = ref('Hello, Vue 3!');

const handleClick = () => {
    console.log('Button clicked!');
    //show alert
    // alert('Button clicked!');
    message.value = 'Button clicked!';
}

</script>

<style scoped>

</style>