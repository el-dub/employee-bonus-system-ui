<template>
  <b-list-group class="text-xs">
    <b-list-group-item
      v-for="tab in tabs"
      :key="tab.name"
      :active="tab.id === tab.id"
      @click="selectCategory(category)"
    >
      <FontAwesomeIcon :icon="tab.icon" class="mr-1" />
      {{ tab.label }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminCategories",
  data() {
    return {
      tabs: [
        {
          name: "profile",
          label: "Profile settings",
          icon: ["fas", "user"],
        },
        {
          name: "favorite-categories",
          label: "Favorite categories",
          icon: ["fas", "star"],
        },
      ],
      selectedTabName: "profile",
    };
  },
});
</script>

<style scoped lang="scss"></style>
