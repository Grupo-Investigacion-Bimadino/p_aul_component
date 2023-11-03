<template>
  <div>
    <v-btn @click="toggleListening" icon variant="outlined">
      <v-icon>{{ isListening ? "mdi-microphone-off" : "mdi-microphone" }}</v-icon>
    </v-btn>
    <div v-if="isListening">
      <p>Escuchando...</p>
      <p>{{ lastCommand }}</p>
      <p>{{ transcript }}</p>
    </div>
    <div v-else>
      <p>Escucha detenida</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVoiceAssistantStore } from "~/store/voiceAssistant";

const voiceAssistantStore = useVoiceAssistantStore();
const isListening = computed(() => voiceAssistantStore.isListening);
const lastCommand = computed(() => voiceAssistantStore.lastCommand);
const transcript = computed(() => voiceAssistantStore.transcript);

const toggleListening = () => {
  if (isListening.value) {
    voiceAssistantStore.stopListening();
  } else {
    voiceAssistantStore.startListening();
  }
};
</script>
