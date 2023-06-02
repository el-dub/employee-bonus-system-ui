<template>
  <div class="text-dark-blue font-bold text-xl mb-4">Manage Custom Bonuses</div>
  <b-button v-b-modal:add-bonus-modal variant="primary"
    >Add Custom Bonus
  </b-button>
  <b-modal
    id="add-bonus-modal"
    title="Add Bonus"
    ok-title="Create Bonus"
    @ok="createBonus"
  >
    <div>
      <b-form>
        <b-form-group
          id="bonus-name"
          label="Bonus Name:"
          label-for="bonus-name"
        >
          <b-form-input
            id="bonus-name"
            v-model="bonus.name"
            type="text"
            placeholder="Bonus Name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="bonus-description"
          label="Bonus Description:"
          label-for="bonus-description"
        >
          <b-form-input
            id="bonus-description"
            v-model="bonus.description"
            type="text"
            placeholder="Bonus Description"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="bonus-price"
          label="Bonus Price (points):"
          label-for="bonus-price"
        >
          <b-form-input
            id="bonus-price"
            v-model="bonus.price"
            type="number"
            class="mb-2"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="start-date"
          label="Start Date:"
          label-for="start-date"
        >
          <b-form-datepicker
            id="start-date"
            v-model="bonus.startDate"
            class="mb-2"
            required
          ></b-form-datepicker>
        </b-form-group>

        <b-form-group id="end-date" label="End Date:" label-for="end-date">
          <b-form-datepicker
            id="end-date"
            v-model="bonus.endDate"
            class="mb-2"
            required
          ></b-form-datepicker>
        </b-form-group>
        <!--        <b-button type="submit" variant="primary">Create Bonus</b-button>-->
      </b-form>
    </div>
  </b-modal>
  <BonusList v-if="showList" :show-search="false" />
</template>

<script>
import { defineComponent } from "vue";
import { useBonusStore } from "@/stores/bonus";

export default defineComponent({
  name: "CustomBonusCard",
  data() {
    return {
      bonus: {
        name: "",
        description: "",
        price: 100,
        startDate: new Date(),
        endDate: new Date(),
      },
      showList: false,
    };
  },
  created() {},
  methods: {
    createBonus() {
      this.showList = true;
      useBonusStore().selectCategory("company-specials");
      useBonusStore().addCustomBonus(this.bonus);
      this.bonus = {
        name: "",
        description: "",
        price: 100,
        startDate: new Date(),
        endDate: new Date(),
      };
      console.log("create bonus");
    },
  },
});
</script>

<script setup>
import BonusList from "@/components/bonus/BonusList.vue";
</script>
<style scoped lang="scss"></style>
