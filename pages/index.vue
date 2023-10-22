<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <!-- adicionar input para ingresar id y redireccionar con el boton ir al id ingresado con la ruta /components/id -->
    <v-card elevation="0" width="50vw">
      <v-row>
        <v-col cols="12">
          <v-text-field label="Component ID" v-model="id" outlined dense class="mt-4"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn color="primary" @click="goToComponent">Go to component</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const id = ref("");

const goToComponent = () => {
  router.push(`/components/${id.value}`);
};
</script>
