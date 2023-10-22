<template>
  <v-card class="mx-auto pa-1 ma-2" variant="outlined">
    <v-card-item :title="component.name">
      <template v-slot:subtitle> </template>
    </v-card-item>

    <v-card-actions>
      <v-select
        class="btn-editor-container"
        v-model="component.properties.data"
        :items="component.properties.items"
        :label="component.properties.label"
        :multiple="component.properties.multiple"
        :hint="component.properties.hint"
        :color="component.properties.color"
        :persistent-hint="component.properties.persistent_hint"
        @mouseenter="showButtons = true"
        outlined></v-select>
    </v-card-actions>

    <v-card-actions @mouseleave="showButtons = false">
      <div class="btn-editor" v-if="showButtons">
        <v-btn color="grey-lighten-2" icon @click="editing = !editing" class="elevation-0 rounded-lg" size="x-small" variant="outlined">
          <v-icon color="amber-darken-1">mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="grey-lighten-2" icon @click="saveChanges" class="elevation-0 rounded-lg" size="x-small" variant="outlined">
          <v-icon color="green-darken-1">mdi-content-save</v-icon>
        </v-btn>
      </div>

      <v-layout>
        <v-navigation-drawer v-model="editing" location="right" width="544" temporary>
          <v-container>
            <v-list-item :title="`Propiedades del componente ${component.name}`" :subtitle="`v ${component.version}`"></v-list-item>
            <v-divider></v-divider>
            <v-list v-for="(property, propertyName) in component.properties" :key="propertyName" variant="outlined">
              <component
                v-if="propertyName != 'data' && propertyName != 'v_model'"
                :is="getEditorComponent(propertyName, component.properties[propertyName]).component"
                v-model="component.properties[propertyName]"
                color="#1976d2"
                variant="outlined"
                :label="propertyName" />
            </v-list>
            <v-list-item :title="`Estructura del componente ${component.name}`" :subtitle="`v ${component.version}`">
              <v-spacer></v-spacer>
              <v-btn text @click="showCode = !showCode">
                <v-icon>{{ showCode ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                Mostrar código
              </v-btn>
              <v-expand-transition>
                <div class="code-container" v-show="showCode">
                  <v-btn id="copyButton" color="grey-lighten-1" icon small class="copy-button ma-2">
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                  <pre id="codeText"><code class="language-js">{{ component }}</code></pre>
                </div>
              </v-expand-transition>
            </v-list-item>
          </v-container>
        </v-navigation-drawer>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import ClipboardJS from "clipboard";

const route = useRoute();
const { id } = route.params;
const copyButtonId = "copyButton";
const codeTextId = "codeText";
let showButtons = ref(false);
let showCode = ref(false);

onMounted(() => {
  Prism.highlightAll();
  new ClipboardJS(`#${copyButtonId}`, {
    text: () => document.getElementById(codeTextId).textContent,
  });
});

let editing = ref(false);
let pathAPI = "http://localhost:4000/api/v1/components/";

const { data: component, error } = await useAsyncData("getComponent", () => $fetch(`${pathAPI}${id}`));

const saveChanges = async () => {
  /*  try {
    const id = "65303dd7c374fca58ca541e9"; // ID del componente
    const updatedComponent = {
      label: properties.label,
      multiple: properties.multiple,
      data: properties.data,
      hint: properties.hint,
      items: properties.items,
    };

    const response = await fetch(`http://localhost:4000/api/v1/components/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComponent),
    });

    if (response.ok) {
      editing.value = false;
    }
  } catch (error) {
    console.error(error);
  }*/
};

// Función para obtener el componente de edición apropiado según el tipo && propertyName != "data" && propertyName != "v-models"
const getEditorComponent = (propertyName, propertyValue) => {
  if (propertyValue != null) {
    switch (typeof propertyValue) {
      case "string":
        if (propertyName === "color") {
          return {
            component: "v-color-picker",
            props: {},
          };
        } else if (propertyName === "data") {
          return {
            component: "v-text-field",
            props: {},
          };
        }
        break;
      case "boolean":
        return {
          component: "v-switch",
          props: {},
        };
      /*case "object":
        if (Array.isArray(propertyValue)) {
          return {
            component: "v-combobox",
            items: propertyValue,
          };
        }
        break;*/
    }
  }
  return {
    component: "v-text-field",
    props: {},
  };
};

/*const getEditorComponent = (propertyName, propertyValue) => {
  console.log(typeof propertyValue);
  if (propertyValue != null) {
    switch (propertyName) {
      case "color":
        return {
          component: "v-color-picker",
          props: {},
        };
      case "data":
        return {
          component: "v-text-field",
          props: {},
        };
      case typeof propertyValue === "boolean":
        return {
          component: "v-switch",
          props: {},
        };
      case Array.isArray(propertyValue):
        return {
          component: "v-combobox",
          props: {
            "onUpdate:modelValue": (newValue) => {
              console.log(newValue);
              component.properties[propertyName] = newValue;
            },
          },
        };
      default:
        return {
          component: "v-text-field",
          props: {},
        };
    }
  }
};*/
</script>

<style scoped>
/**Align left v-aling center */
.property-name {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.code-container {
  position: relative;
}

.copy-button {
  position: absolute;
  top: 0;
  right: 0;
}

.btn-editor-container {
  position: relative;
}

.btn-editor {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
