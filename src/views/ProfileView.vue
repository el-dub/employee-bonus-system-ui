<template>
  <PageLayout>
    <template #nav>
      <TabSelector v-model:selectedTabName="selectedTabName" :tabs="tabs" />
    </template>
    <template #main>
      <ProfileWallet v-if="selectedTabName === 'wallet'" />
      <ProfileOrders v-else-if="selectedTabName === 'orders'" />
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/components/layout/PageLayout.vue";
import TabSelector from "@/components/common/TabSelector.vue";
import ProfileOrders from "@/components/profile/orders/ProfileOrders.vue";
import ProfileWallet from "@/components/profile/ProfileWallet.vue";

export default {
  name: "ProfileView",
  components: { ProfileWallet, ProfileOrders, TabSelector, PageLayout },
  data() {
    return {
      tabs: [
        {
          name: "wallet",
          label: "Profile",
          icon: ["fas", "user"],
        },
        // {
        //   name: "wallet",
        //   label: "Wallet",
        //   icon: ["fas", "wallet"],
        // },
        {
          name: "favorite-categories",
          label: "Favorite categories",
          icon: ["fas", "star"],
        },
        {
          name: "orders",
          label: "Orders",
          icon: ["fas", "clock-rotate-left"],
        },
      ],
      selectedTabName: "profile",
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
