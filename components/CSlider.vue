<template>
  <v-slider
    class="ma-5"
    v-model="component.properties.v_model"
    :disabled="component.properties.disabled"
    :min="component.properties.min"
    :max="component.properties.max"
    :step="component.properties.step"
    :thumb-label="component.properties.thumb_label"
    :prepend-icon="component.properties.append_icon"
    :append-icon="component.properties.prepend_icon"></v-slider>
</template>

<script setup>
const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
