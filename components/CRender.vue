<template>
  <div>
    <div v-if="component" class="btn-editor-container" @mouseenter="onShowProperties" @mouseleave="isVisiblePanelButtons = false">
      <component :is="dynamicRenderCOmponent(component.type)" :component="component" class="ma-1 pa-1" />
      <CPanelEditor v-if="isVisiblePanelButtons" />
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

const hidePanelButtons = () => {
  console.log(isVisiblePanelButtons.value);
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
</style>
