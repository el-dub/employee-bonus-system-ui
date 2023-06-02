<template>
  <div>
    <div class="mb-4">{{ header }}</div>
    <div class="text-sm">
      <b-card
        v-for="order in orders"
        :key="order.id"
        class="h-32"
        :title="order.name"
        :sub-title="order.time"
        :img-src="order.mainImage"
        img-alt="Order"
        img-left
      >
        <b-card-text> {{ order.amount }} points </b-card-text>

        <!--        <b-button variant="primary" class="mr-1 text-sm">Buy Again</b-button>-->
        <b-button href="#" variant="primary" class="text-sm">Details</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardList",
  props: {
    header: { type: String, required: true },
  },
  data() {
    return {
      orders: [
        {
          id: 1,
          time: "28 May 2023, 12:12",
          name: "Get 4x15 PLN discount on Wolt!",
          amount: 100,
          mainImage: "https://placekitten.com/300/300",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss"></style>
