<template>
  <v-form>
    {{ tempWidth }}
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="tempWidth" label="Width" type="text" :suffix="currentUnit" @input="updateWidth" variant="outlined">
            <template v-slot:append>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" class="mt-n2"> Unidad </v-btn>
                </template>
                <v-card>
                  <v-card-text class="pa-1">
                    <v-radio-group v-model="currentUnit" @change="updateWidth">
                      <v-radio label="Pixels" value="px"></v-radio>
                      <v-radio label="Ems" value="em"></v-radio>
                      <v-radio label="Porcentaje" value="%"></v-radio>
                    </v-radio-group>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref, watchEffect, watch } from "vue";

const props = defineProps({
  tempWidth: {
    type: String,
    required: true,
  },
});

const tempWidth = ref(props.tempWidth);

const emit = defineEmits();
watch(tempWidth, (newTempWidth) => {
  console.log("tempWidth:", newTempWidth);
  emit("onChangeWidth", tempWidth.value);
});

const currentUnit = ref("");
const unitMenu = ref(false);

const selectUnit = (unit) => {
  // currentUnit.value = unit;
  // unitMenu.value = false;
  // updateWidth();
};

const updateWidth = () => {
  // Construye el valor final con la unidad seleccionada
  //const widthInteger = parseInt(widthValue.value);
  //const formatedWidth = `${widthInteger}${currentUnit.value}`;
  // Ahora puedes usar "width" en tu lógica o actualizar tu componente principal con el nuevo valor.
  // widthValue.value = formatedWidth;
  // console.log("Width:", props.width);
  //props.width = formatedWidth;
  // widthValue.value = formatedWidth;
};

watchEffect(() => {
  /*  if (props.width) {
    if (typeof props.width === "string") {
      const width = props.width || "";
      const match = width.match(/^([\d.]+)(\D+)$/);
      if (match) {
        widthValue.value = match[1];
        currentUnit.value = match[2];
      }
    }
  }*/
});

// Actualizar la propiedad del componente cuando cambie el valor o la unidad
watchEffect(() => {
  // props.component.properties.v_model = `${widthValue.value}${currentUnit.value}`;
});
</script>
