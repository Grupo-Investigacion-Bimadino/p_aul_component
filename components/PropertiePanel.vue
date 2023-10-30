<template>
  <v-card>
    <v-tabs v-model="tab" centered>
      <v-tab value="tab-1"> Propiedades </v-tab>
      <v-tab value="tab-2"> Componentes </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="tab-1">
        <v-card>
          <v-card-text>
            <v-list :title="`Propiedades del componente ${component.name}`" :subtitle="`v ${component.version}`">
              <v-list-item v-for="(property, propertyName) in component.properties" :key="propertyName">
                <component
                  v-if="propertyName != 'data' && propertyName != 'v_model'"
                  :is="getComponetByType(component.properties[propertyName], propertyName)"
                  :label="propertyName"
                  v-model="component.properties[propertyName]"
                  :property="component.properties[propertyName]"
                  :field="propertyName"
                  variant="outlined"
                  color="primary"
                  :v_model="component.properties['v_model']"
                  class="pa-1"
                  :component="component" />
                <v-divider v-if="propertyName != 'data' && propertyName != 'v_model'" class="border-opacity-25"></v-divider>
              </v-list-item>
            </v-list>
            <v-card elevation="0" variant="outlined">
              <v-card-actions>
                <v-btn variant="text" @click="showCode = !showCode"> JSON </v-btn>

                <v-spacer></v-spacer>
                <v-btn :icon="showCode ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="showCode = !showCode"></v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div class="code-container" v-show="showCode">
                  <v-btn id="copyButton" icon small class="copy-button ma-2">
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                  <pre id="codeText"><code class="language-js">{{ component }}</code></pre>
                </div>
              </v-expand-transition>
            </v-card>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="tab-2">
        <v-card max-width="600" class="mx-auto">
          <v-card-text>
            <div class="d-flex flex-column align-left">
              <v-btn-toggle mandatory>
                <CBtnsBtnContent @onAddComponent="addComponent" />
                <CBtnsBtCWidthComponent @onAddComponent="addComponent" />
              </v-btn-toggle>
            </div>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script setup>
import { PropertieArray, CWidthComponent, CBtnsBtCWidthComponent, CBtnsBtnContent, CRender, CUnitInputField } from "#components";
import { usePropertiePanelStore } from "~/store/propertiePanel";

import { ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import ClipboardJS from "clipboard";

const copyButtonId = "copyButton";
const showCode = ref(false);
const tab = ref(null);
const propertiePanelStore = usePropertiePanelStore();
const component = computed(() => propertiePanelStore.getComponentTemp);
const codeTextId = "codeText";

const alignment = 1;
const formatting = [];
const value = "Toggle button requirements.\n\nHave at least three toggle buttons in a group\nLabel buttons with text, an icon, or";

onMounted(() => {
  Prism.highlightAll();
  new ClipboardJS(`#${copyButtonId}`, {
    text: () => document.getElementById(codeTextId).textContent,
  });
});

const getComponetByType = (propertyValue, propertyName) => {
  switch (typeof propertyValue) {
    case "string":
      /*if (propertyName == "width") {
        console.log("CWidthComponent");
        return CUnitInputField;
      } else */
      return "v-text-field";
    case "number":
      return "v-text-field";
    case "boolean":
      return "v-switch";
    case "object":
      return PropertieArray;
    default:
      return "v-text-field";
  }
};

const addComponent = (newComponent) => {
  component.value.properties.components.push(newComponent);
};
</script>

<style lang="scss" scoped>
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
