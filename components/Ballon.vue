<template>
  <div>
    <div :style="{ position: 'relative' }">
      <SpeedDial
        :model="items"
        direction="up"
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          margin: '2rem',
        }"
        :buttonProps="{ severity: 'danger', rounded: true }"
        :tooltipOptions="{ position: 'right' }"
      />
      <Toast />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();

const items = ref([
  {
    label: "Add",
    icon: "pi pi-pencil",
    command: () => {
      toast.add({
        severity: "info",
        summary: "Add",
        detail: "Data Added",
        life: 3000,
      });
    },
  },
  {
    label: "Update",
    icon: "pi pi-refresh",
    command: () => {
      toast.add({
        severity: "success",
        summary: "Update",
        detail: "Data Updated",
        life: 3000,
      });
    },
  },
]);
</script>

<style scoped></style>
