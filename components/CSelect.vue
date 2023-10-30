<template>
  <v-select
    v-model="component.properties.v_model"
    :multiple="component.properties.multiple"
    :hint="component.properties.hint"
    :items="component.properties.items"
    item-title="text"
    item-value="value"
    :label="component.properties.label"
    :variant="component.properties.variant"
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
