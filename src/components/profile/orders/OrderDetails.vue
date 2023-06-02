<template>
  <div>
    <div class="mb-4 flex align-items-center">
      <div class="pr-1 cursor-pointer" @click="showOrderList">
        <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
      </div>
      <div>Order Details</div>
    </div>
    <div class="order-card">
      <div class="main-info"></div>
      <div class="order-cost"></div>
      <div class="coupon"></div>
      <div class="order-details"></div>
    </div>
    <div class="text-sm">
      <b-card
        :key="order.id"
        class="h-52"
        :title="order.name"
        :sub-title="order.time"
        img-src="https://kpi.ua/files/images-page/kpi-big-logo.png"
        img-alt="Order"
        img-left
      >
        <b-card-text class="mb-2"> 100 points</b-card-text>
        <div class="text-primary mb-4">
          <div>Coupon code:</div>
          <div class="text-lg">COUPON123443</div>
        </div>

        <!--        <b-button variant="primary" class="mr-1 text-sm">Buy Again</b-button>-->
        <!--        <b-button href="#" variant="primary" class="text-sm">Details</b-button>-->
      </b-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderDetails",
  props: {
    orderId: { type: Number, required: true },
  },
  emits: ["show-order-list"],
  data() {
    return {
      order: {
        id: 1,
        mainImage: "https://placekitten.com/300/300",
        cost: 100,
        couponCode: "WORKSMILE60",
        expirationDate: "28 May 2024, 12:12",
        orderDate: "28 May 2023, 12:12",
        name: "Get 4x15 PLN discount on Wolt!",
        description:
          "Order the best food and shop essentials with fast delivery",
      },
    };
  },
  methods: {
    showOrderList() {
      console.log("showOrderList");
      this.$emit("show-order-list");
    },
  },
});
</script>

<style scoped lang="scss">
.order-card {
  font-size: 0.825rem;
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: 3fr 2fr 1fr;
  grid-template-areas:
    "info cost"
    "info coupon"
    "info details";
}

.main-info {
  grid-area: info;
}

.order-cost {
  grid-area: cost;
}

.coupon {
  grid-area: coupon;
}

.order-details {
  grid-area: details;
}
</style>
