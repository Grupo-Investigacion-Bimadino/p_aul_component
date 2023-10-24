<template>
  <div class="btn-editor" v-if="panelButtons" @mouseleave="appStore.hidePanelButtons">
    <v-btn color="grey-lighten-2" icon @click.stop="appStore.toggleShowProperties" class="elevation-0 rounded-lg" size="x-small" variant="outlined">
      <v-icon color="amber-darken-1">mdi-pencil</v-icon>
    </v-btn>
    <v-btn color="grey-lighten-2" icon @click="saveChanges" class="elevation-0 rounded-lg" size="x-small" variant="outlined">
      <v-icon color="green-darken-1">mdi-content-save</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const panelButtons = computed(() => appStore.getPanelButtons);

const saveChanges = async () => {};
</script>

<style>
.btn-editor {
  position: absolute;
  top: -35px;
  right: 0px;
}
</style>
