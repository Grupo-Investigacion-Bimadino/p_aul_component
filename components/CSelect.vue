<template>
  <v-select
    v-model="component.properties.v_model"
    :hint="component.properties.hint"
    :items="component.properties.items"
    item-title="title"
    item-value="value"
    :label="component.properties.label"
    :persistent-hint="component.properties.persistent_hint"></v-select>
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
