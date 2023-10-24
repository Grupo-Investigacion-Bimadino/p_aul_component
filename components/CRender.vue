<template>
  <div class="btn-editor-container">
    <component :is="dynamicRenderCOmponent(type)" :component="component" @mouseenter="onShowProperties" />
    <CPanelEditor />
  </div>
</template>
<script setup>
import { CSelect, CDefault } from "#components";
import { useAppStore } from "~/store/app";
import { usePropertiePanelStore } from "~/store/propertiePanel";

const appStore = useAppStore();
const propertiePanelStore = usePropertiePanelStore();

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

const onShowProperties = () => {
  propertiePanelStore.setComponentTemp(props.component);
  appStore.showPanelButtons();
};

const dynamicRenderCOmponent = (type) =>
  ({
    CSelect,
    CDefault,
  }[type]);
</script>

<style>
.btn-editor-container {
  position: relative;
}
</style>
