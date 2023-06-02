<template>
  <div class="bonus-details px-32">
    <div class="header mb-4 flex align-items-center">
      <div class="pr-1 cursor-pointer" @click="showBonusList">
        <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
      </div>
      <div>{{ bonus.name }}</div>
    </div>
    <!--    <b-img-->
    <!--      :img-src="bonus.mainImage"-->
    <!--      fluid-grow-->
    <!--      alt="Bonus image"-->
    <!--      class="image"-->
    <!--    ></b-img>-->
    <div class="price small-card flex flex-column gap-3">
      <div class="flex justify-between">
        <div class="text-dark-blue">Price</div>
        <div class="price-label">{{ bonus.price }} pts</div>
      </div>
      <b-button variant="primary" @click="makeOrder">Order Now</b-button>
    </div>
    <!--    <div class="quantity small-card flex justify-between">-->
    <!--      <div class="text-dark-blue">Price</div>-->
    <!--      <div class="price-label">{{ bonus.price }} pts</div>-->
    <!--    </div>-->
    <div class="description small-card">
      <div class="text-dark-blue">Description</div>
      <div class="font-normal">{{ bonus.description }} pts</div>
    </div>
  </div>
</template>

<script>
import { useBonusStore } from "@/stores/bonus";
import { useUserStore } from "@/stores/useStore";

export default {
  name: "BonusDetails",
  props: {
    bonusId: { type: String, required: true },
  },
  emits: ["show-order-details", "show-bonus-list"],
  data() {
    return {
      bonus: undefined,
    };
  },
  created() {
    this.getBonusDetails();
  },
  methods: {
    showBonusList() {
      this.$emit("show-bonus-list");
    },
    getBonusDetails() {
      this.bonus = useBonusStore().geById(this.bonusId);
    },
    makeOrder() {
      useUserStore().decreaseRedeemable(100);
      this.$emit("show-order-details", "ddd");
    },
  },
};
</script>

<style scoped lang="scss">
.bonus-details {
  display: grid;
  grid-template-columns: 1fr 18.75rem;
  grid-template-rows: auto 1fr 1fr 2fr;
  grid-template-areas:
    "header header"
    "description price";
  //"image price"
  //"image ."
  //"description .";
  gap: 1rem;

  .header {
    grid-area: header;
  }

  .image {
    grid-area: image;
    align-self: stretch;
  }

  .price {
    grid-area: price;

    .price-label {
      color: #00a3fe;
    }
  }

  .quantity {
    grid-area: quantity;
  }

  .description {
    grid-area: description;
    align-self: flex-start;
  }

  .small-card {
    background-color: white;
    padding: 1rem;
    font-weight: 600;
  }
}
</style>
