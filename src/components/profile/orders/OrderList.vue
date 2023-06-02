<template>
  <div>
    <div class="text-dark-blue font-bold text-xl mb-4">Orders</div>
    <div class="text-sm">
      <b-card
        v-for="order in orders"
        :key="order.id"
        class="h-36 py-2"
        :title="order.name"
        :sub-title="order.time"
        img-src="https://kpi.ua/files/images-page/kpi-big-logo.png"
        img-alt="Order"
        img-left
      >
        <b-card-text class="mb-1">100 points</b-card-text>

        <!--        <b-button variant="primary" class="mr-1 text-sm">Buy Again </b-button>-->
        <b-button
          variant="primary"
          class="text-sm"
          @click="showDetails(order.id)"
          >Details
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderList",
  props: {
    // header: { type: String, required: true },
  },
  emits: ["show-details"],
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
  methods: {
    showDetails(orderId) {
      this.$emit("show-details", orderId);
    },
  },
});
</script>

<style scoped lang="scss"></style>
