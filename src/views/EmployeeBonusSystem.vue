<template>
  <RouterView />
</template>

<script>
import { defineComponent } from "vue";
import { useBonusStore } from "@/stores/bonus";
import { useConfigStore } from "@/stores/config";

export default defineComponent({
  name: "EmployeeBonusSystem",
  data() {
    return {
      isAdmin: true,
    };
  },
  async created() {
    if (this.isAdmin) {
      useConfigStore().initLoad();
    }
    await useBonusStore().loadCategories();
  },
});
</script>

<style scoped lang="scss"></style>
