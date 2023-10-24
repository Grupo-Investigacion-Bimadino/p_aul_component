<template>
  <div>
    <v-list :title="`Propiedades del componente ${component.name}`" :subtitle="`v ${component.version}`">
      <v-list-item v-for="(property, propertyName) in component.properties" :key="propertyName">
        <component
          v-if="propertyName != 'data' && propertyName != 'v_model'"
          :is="getComponetByType(component.properties[propertyName])"
          :label="propertyName"
          v-model="component.properties[propertyName]"
          :property="component.properties[propertyName]"
          :field="propertyName"
          variant="outlined"
          color="primary"
          class="pa-1" />
        <v-divider v-if="propertyName != 'data' && propertyName != 'v_model'" class="border-opacity-25"></v-divider>
      </v-list-item>
    </v-list>
  </div>
</template>
<script setup>
import { PropertieArray } from "#components";
import { usePropertiePanelStore } from "~/store/propertiePanel";

const propertiePanelStore = usePropertiePanelStore();
const component = computed(() => propertiePanelStore.getComponentTemp);

const getComponetByType = (propertyValue) => {
  switch (typeof propertyValue) {
    case "string":
      return "v-text-field";
    case "number":
      return "v-text-field";
    case "boolean":
      return "v-switch";
    case "object":
      return PropertieArray;
    default:
      return "v-text-field";
  }
};
</script>

<style lang="scss" scoped></style>
