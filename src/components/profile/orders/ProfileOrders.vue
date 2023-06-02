<template>
  <OrderDetails
    v-if="selectedOrderId"
    order-id="selectedOrderId"
    @show-order-list="showOrderDetails(undefined)"
  />
  <OrderList v-else @show-details="showOrderDetails" />
</template>

<script>
import { defineComponent } from "vue";
import OrderList from "@/components/profile/orders/OrderList.vue";
import OrderDetails from "@/components/profile/orders/OrderDetails.vue";

export default defineComponent({
  name: "ProfileOrders",
  components: { OrderDetails, OrderList },
  data() {
    return {
      selectedOrderId: undefined,
    };
  },
  methods: {
    showOrderDetails(orderId) {
      console.log("showOrderDetails", orderId);
      this.selectedOrderId = orderId;
    },
  },
});
</script>

<style scoped lang="scss"></style>
