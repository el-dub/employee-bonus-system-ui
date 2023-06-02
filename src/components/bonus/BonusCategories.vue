<template>
  <b-list-group class="text-xs">
    <b-list-group-item
      v-for="category in categories"
      :key="category.name"
      :active="category.name === selectedCategoryName"
      @click="selectCategory(category)"
    >
      <FontAwesomeIcon :icon="category.icon" class="mr-1" />
      {{ category.label }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useBonusStore } from "@/stores/bonus";

export default defineComponent({
  name: "BonusCategories",
  components: { FontAwesomeIcon },
  emits: ["select-category"],
  data() {
    return {
      isCompanySpecialsEnabled: true,
    };
  },
  computed: {
    categories() {
      return useBonusStore().categories;
    },
    selectedCategoryName() {
      return useBonusStore().selectedCategory;
    },
  },
  methods: {
    selectCategory(category) {
      console.log("selectCategory", category, this.selectedCategory);
      useBonusStore().selectCategory(category.name);
    },
  },
});
</script>

<style scoped lang="scss"></style>
