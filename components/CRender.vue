<template>
  <div class="btn-editor-container">
    <component :is="dynamicRenderCOmponent(component.type)" :component="component" @mouseenter="onShowProperties" />
    <v-divider></v-divider>
    <CPanelEditor :visiblePanelButtons="visiblePanelButtons" @onHidePanelButtons="hidePanelButtons" />
  </div>
</template>
<script setup>
import { CSelect, CContent, CDefault } from "#components";
import { useAppStore } from "~/store/app";
import { usePropertiePanelStore } from "~/store/propertiePanel";

const appStore = useAppStore();
const propertiePanelStore = usePropertiePanelStore();
const visiblePanelButtons = ref(false);

const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
});

const onShowProperties = () => {
  propertiePanelStore.setComponentTemp(props.component);
  appStore.showPanelButtons();
};

const hidePanelButtons = (status) => {
  visiblePanelButtons = status;
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
