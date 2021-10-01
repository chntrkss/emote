<script setup lang="ts">
    import { dolma } from "dolma"
    import { ref, computed } from "vue"
    import Emote from "/src/components/Emote.vue"

    const inputText = ref("")
    const encodedData = computed(() => dolma.encode(inputText.value))
</script>

<template>
    <input v-model="inputText" type="text" />
    <br />
    <Emote :encodedData="encodedData" />
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
