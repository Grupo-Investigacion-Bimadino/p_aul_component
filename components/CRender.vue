<template>
  <div class="btn-editor-container" @mouseenter="onShowProperties" @mouseleave="isVisiblePanelButtons = false">
    <component :is="dynamicRenderCOmponent(component.type)" :component="component" />
    <v-divider></v-divider>
    <CPanelEditor v-if="isVisiblePanelButtons" />
  </div>
</template>
<script setup>
import { CSelect, CContent, CDefault } from "#components";
import { useAppStore } from "~/store/app";
import { usePropertiePanelStore } from "~/store/propertiePanel";

const appStore = useAppStore();
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
  }[type]);
</script>

<style>
.btn-editor-container {
  position: relative;
}
</style>
