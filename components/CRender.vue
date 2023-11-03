<template>
  <div>
    <div v-if="component" class="btn-editor-container" @mouseenter="onShowProperties" @mouseleave="isVisiblePanelButtons = false" v-bind="props">
      <component :is="dynamicRenderCOmponent(component.type)" :component="component" class="ma-1 pa-1" />
      <CPanelEditor v-if="isVisiblePanelButtons" :component="component" />
    </div>
  </div>
</template>
<script setup>
import { CSelect, CContent, CDefault, CWidthComponent } from "#components";
import { usePropertiePanelStore } from "~/store/propertiePanel";

const propertiePanelStore = usePropertiePanelStore();
const isVisiblePanelButtons = ref(false);

const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
});

const onShowProperties = () => {
  propertiePanelStore.setComponentTemp(props.component);
  isVisiblePanelButtons.value = true;
};

const dynamicRenderCOmponent = (type) =>
  ({
    CSelect,
    CDefault,
    CContent,
    CWidthComponent,
  }[type]);
</script>

<style>
.btn-editor-container {
  position: relative;
}

.btn-editor-container:hover {
  background-color: rgb(255, 255, 194, 0.1);
  /* Agrega otros estilos de resaltado si es necesario */
}
</style>
