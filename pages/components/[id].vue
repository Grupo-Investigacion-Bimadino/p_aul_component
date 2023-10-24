<template>
  <div class="d-flex align-center flex-column">
    <h1>Component Vue page</h1>
    <!-- 50 horizontal width -->
    <v-card elevation="0" width="50vw" class="mx-auto pa-1 ma-2" variant="outlined">
      <v-card-item>
        <template v-slot:subtitle> </template>
      </v-card-item>
      <v-card-actions>
        <v-row>
          <v-col cols="12">
            <CRender v-if="component" :properties="properties" :component="component" :type="type" />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const pathAPI = "http://localhost:4000/api/v1/components/";
const route = useRoute();
const id = route.params.id;

const component = ref(null);
const properties = ref({});
const type = ref(null);

onBeforeMount(async () => {
  try {
    const componentData = await fetch(`${pathAPI}${id}`).then((response) => response.json());
    if (componentData) {
      component.value = componentData;
      properties.value = componentData.properties;
      type.value = componentData.type;
    }
  } catch (error) {
    console.error("Error al cargar los datos desde la API:", error);
  }
});
</script>
<style scoped></style>
