<template>
  <PageLayout>
    <template #nav>
      <TabSelector v-model:selected-tab-name="selectedTabName" :tabs="tabs" />
    </template>
    <template #main>
      <RecognitionRulesCard v-if="selectedTabName === 'recognition-rules'" />
      <CustomBonusCard v-if="selectedTabName === 'custom-bonuses'" />
      <div v-if="selectedTabName === 'allowance'">
        <div class="text-dark-blue font-bold text-xl">Allowance Settings</div>
        <b-form-group
          id="bonus-price"
          label="Redeemable points (budget)"
          label-for="bonus-price"
        >
          <b-form-input
            id="bonus-price"
            v-model="redeemable"
            type="number"
            class="mb-2"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="bonus-price"
          label="Giveable points"
          label-for="bonus-price"
        >
          <b-form-input
            id="bonus-price"
            v-model="giveable"
            type="number"
            class="mb-2"
            required
          ></b-form-input>
        </b-form-group>
        <b-button variant="primary">Save Settings </b-button>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import BonusList from "@/components/bonus/BonusList.vue";
import PageLayout from "@/components/layout/PageLayout.vue";
import BonusCategories from "@/components/bonus/BonusCategories.vue";
import TabSelector from "@/components/common/TabSelector.vue";
import { useConfigStore } from "@/stores/config";
import RecognitionRulesCard from "@/components/admin/configuration-card/RecognitionRulesCard.vue";
import CustomBonusCard from "@/components/admin/configuration-card/CustomBonusCard.vue";

export default {
  name: "AdminView",
  components: {
    CustomBonusCard,
    RecognitionRulesCard,
    TabSelector,
    BonusCategories,
    PageLayout,
    BonusList,
  },
  data() {
    return {
      selectedTabName: undefined,
      redeemable: 200,
      giveable: 200,
    };
  },
  computed: {
    tabs() {
      return useConfigStore().adminConfigDefinition.sections;
    },
  },
  created() {
    this.selectedTabName = this.tabs[0].name;
  },
};
</script>

<style scoped lang="scss"></style>
