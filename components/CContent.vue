<template>
  <div>
    <v-card
      :title="component.properties.title"
      :subtitle="component.properties.subtitle"
      :text="component.properties.text"
      :variant="component.properties.variant"
      :components="component.properties.components">
      <v-sheet :height="50" width="100%" rounded color="grey-lighten-3"></v-sheet>
      <div v-for="(c, i) in component.properties.components" :key="i">
        <CRender v-if="c" :component="c" />
      </div>
    </v-card>
  </div>
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
