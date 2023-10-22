<template>
  <v-card class="mx-auto pa-1 ma-2" variant="outlined">
    <v-card-item :title="component.name">
      <template v-slot:subtitle> </template>
    </v-card-item>
    <component :is="type" v-bind="properties" />
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
  properties: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>
