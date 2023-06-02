<template>
  <div class="flex flex-col gap-4">
    <div class="search mb-4">
      <b-nav-form v-if="showSearch">
        <b-form-input
          size="sm"
          class="mr-sm-2 w-72"
          placeholder="Search"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit"
          >Search
        </b-button>
      </b-nav-form>
    </div>
  </div>
  <div class="flex flex-col align-items-center justify-between">
    <div class="flex flex-wrap gap-4 align-self-start">
      <b-card
        v-for="bonus in bonusList"
        :key="bonus.id"
        :title="bonus.name"
        :img-src="bonus.mainImage"
        :img-alt="bonus.name"
        img-top
        tag="article"
        style="width: 20rem"
        class="mb-2"
      >
        <b-card-text class="text-sm mb-1">{{ bonus.description }}</b-card-text>
        <b-card-text class="text-primary mb-4"
          >{{ bonus.price }} points</b-card-text
        >

        <b-button href="#" variant="primary" @click="showDetails(bonus.id)"
          >Check</b-button
        >
      </b-card>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="bonusList.length"
      :per-page="perPage"
      aria-controls="my-table"
      class="mt-auto"
    ></b-pagination>
  </div>
</template>

<script>
import { useBonusStore } from "@/stores/bonus";

export default {
  name: "BonusList",
  props: {
    showSearch: { type: Boolean, default: true },
  },
  emits: ["show-details"],
  data() {
    return {
      currentPage: 1,
      bonuses: [
        {
          id: "sdaasd",
          name: "Coupon for Ikea",
          description: "Furniture and interior design for your home",
          price: 100,
          categoryId: 5,
        },
      ],
    };
  },
  computed: {
    perPage() {
      return useBonusStore().perPage;
    },
    bonusList() {
      return useBonusStore().bonusPage(this.currentPage);
    },
  },
  methods: {
    showDetails(bonusId) {
      this.$emit("show-details", bonusId);
    },
  },
};
</script>

<style scoped lang="scss"></style>
