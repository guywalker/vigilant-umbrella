<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

</script>

<template>
  <main>
    <h1>Vigilant Umbrella</h1>
    <div>{{ store.counter }}</div>
    <button @click="store.increment">Increment</button>
  </main>
</template>
