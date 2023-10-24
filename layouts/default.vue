<template>
  <v-app>
    <v-navigation-drawer v-model="showProperties" location="right" width="544" temporary>
      <v-layout style="height: 50px">
        <v-system-bar window>
          <v-icon icon="mdi-cog" class="me-2"></v-icon>
          <span>Propiedades del componente</span>
          <v-spacer></v-spacer>
          <v-btn size="small" icon="mdi-close" variant="text" class="ms-2" @click="appStore.toggleShowProperties"></v-btn>
        </v-system-bar>
      </v-layout>

      <v-container>
        <PropertiePanel />
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const appStore = useAppStore();

const showProperties = computed(() => appStore.getShowProperties);
</script>

<style lang="scss" scoped></style>
