<template>
  <PageLayout>
    <template #nav>
      <BonusCategories />
    </template>
    <template #main>
      <BonusList
        v-if="viewType === 'bonus-list'"
        @show-details="showBonusDetails"
      />
      <BonusDetails
        v-else-if="viewType === 'bonus-details'"
        :bonus-id="bonusId"
        @show-order-details="showOrderDetails"
        @show-bonus-list="showBonusList"
      />
      <OrderDetails
        v-else-if="viewType === 'order-details'"
        :order-id="orderId"
        @show-order-list="showBonusList"
      />
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/components/layout/PageLayout.vue";
import BonusList from "@/components/bonus/BonusList.vue";
import BonusCategories from "@/components/bonus/BonusCategories.vue";
import BonusDetails from "@/components/bonus/BonusDetails.vue";
import OrderDetails from "@/components/profile/orders/OrderDetails.vue";
import { useBonusStore } from "@/stores/bonus";

export default {
  name: "BonusView",
  components: {
    OrderDetails,
    BonusDetails,
    BonusCategories,
    BonusList,
    PageLayout,
  },
  data() {
    return {
      viewType: "bonus-list",
      bonusId: undefined,
      orderId: undefined,
    };
  },
  async created() {
    await useBonusStore().loadBonuses();
  },
  methods: {
    showBonusDetails(bonusId) {
      this.bonusId = bonusId;
      this.orderId = undefined;
      this.viewType = "bonus-details";
    },
    showOrderDetails(orderId) {
      this.bonusId = undefined;
      this.orderId = orderId;
      this.viewType = "order-details";
    },
    showBonusList() {
      this.orderId = undefined;
      this.bonusId = undefined;
      this.viewType = "bonus-list";
    },
  },
};
</script>

<style scoped lang="scss"></style>
