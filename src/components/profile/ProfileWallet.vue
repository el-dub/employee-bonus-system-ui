<template>
  <div class="flex gap-8">
    <div class="my-card user w-50">
      <div class="font-bold text-dark-blue mb-1">
        {{ useUserStore().fullName }}
      </div>
      <div class="flex gap-8">
        <b-avatar size="6rem" :text="useUserStore().initials" />
        <div class="flex flex-column justify-between">
          <div class="font-semi-bold text-dark-blue">
            e-mail: {{ useUserStore().email }}
          </div>
          <div class="font-semi-bold text-dark-blue">
            Position: {{ useUserStore().position }}
          </div>
          <div class="font-semi-bold text-dark-blue">
            Department: {{ useUserStore().department }}
          </div>
        </div>
      </div>
    </div>
    <div class="my-card wallet w-80">
      <div class="font-bold text-dark-blue mb-1">Points Summary</div>
      <div class="flex justify-between align-items-center">
        <div class="flex align-items-center gap-3">
          <b-avatar>
            <FontAwesomeIcon :icon="['fas', 'coins']" />
          </b-avatar>
          <div>Giveable</div>
        </div>
        <div>{{ giveable }}</div>
      </div>
      <div class="flex justify-between align-items-center gap-3">
        <div class="flex align-items-center gap-3">
          <b-avatar>
            <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
          </b-avatar>
          <div>Redeemable</div>
        </div>
        <div>{{ redeemable }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useUserStore } from "../../stores/useStore";

export default defineComponent({
  name: "ProfileWallet",
  components: { FontAwesomeIcon },
  computed: {
    giveable() {
      return useUserStore().wallet.giveable;
    },
    redeemable() {
      return useUserStore().wallet.redeemable;
    },
  },
  methods: { useUserStore },
});
</script>

<style scoped lang="scss">
.wallet {
  align-items: stretch;
  padding: 1.5rem;
}

.user {
  //flex-direction: row;
  column-gap: 1rem;
  padding: 1.5rem;
}
</style>
