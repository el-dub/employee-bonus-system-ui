<template>
  <b-list-group class="text-xs">
    <b-list-group-item
      :active="specialCategory.id === selectedCategory.id"
      @click="selectCategory(specialCategory)"
    >
      <FontAwesomeIcon :icon="specialCategory.icon" />
      {{ specialCategory.name }}
    </b-list-group-item>
    <b-list-group-item
      v-for="category in categories"
      :key="category.id"
      :active="category.id === selectedCategory.id"
      @click="selectCategory(category)"
    >
      <FontAwesomeIcon :icon="category.icon" class="mr-1" />
      {{ category.name }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminCategories",
  data() {
    return {
      tabs: ["Company", "Users", "Recognition", "Rewards"],
    };
  },
});
</script>

<style scoped lang="scss"></style>
