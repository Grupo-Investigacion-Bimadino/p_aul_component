<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <!-- adicionar input para ingresar id y redireccionar con el boton ir al id ingresado con la ruta /components/id -->
    <v-card elevation="0" width="50vw">
      <v-row>
        <v-col cols="12">
          <v-text-field label="Component ID" v-model="id" outlined dense class="mt-4"></v-text-field>
          <br />65387d1bd99503cdb3d17687 <br />653675c6a8f0f9fe00b3e866
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
const id = ref("65387d1bd99503cdb3d17687");

const goToComponent = () => {
  router.push(`/components/${id.value}`);
};
</script>
