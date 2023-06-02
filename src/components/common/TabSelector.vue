<template>
  <b-list-group class="text-xs">
    <b-list-group-item
      v-for="tab in tabs"
      :key="tab.name"
      :active="_selectedTabName === tab.name"
      @click="selectTab(tab)"
    >
      <FontAwesomeIcon :icon="tab.icon" class="mr-1" />
      {{ tab.label }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabSelector",
  props: {
    tabs: { type: Array, required: true },
    selectedTabName: { type: String, required: true },
  },
  emits: ["update:modelValue", "update:selectedTabName"],
  data() {
    return {
      // selectedTabName: "profile",
    };
  },
  computed: {
    _selectedTabName: {
      get() {
        return this.selectedTabName;
      },
      set(tabName) {
        this.$emit("update:selectedTabName", tabName);
      },
    },
  },
  methods: {
    selectTab(tab) {
      this._selectedTabName = tab.name;
    },
  },
});
</script>

<style scoped lang="scss"></style>
