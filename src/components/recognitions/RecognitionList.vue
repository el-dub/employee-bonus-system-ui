<template>
  <div
    v-for="recognition in recognitions"
    :key="recognition.id"
    class="recognition-card"
  >
    <div class="flex w-full justify-between">
      <div class="flex gap-3">
        <b-avatar variant="primary"
          >{{ useUtilities().getInitials(recognition.recipientName) }}
        </b-avatar>
        <b-avatar variant="success">{{ "+" + recognition.amount }}</b-avatar>
      </div>
      <div class="ml-24">
        {{ recognition.date }}
      </div>
    </div>

    <div class="text-m">
      {{ recognition.senderName }}:
      {{ recognition.text }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRecognitionStore } from "@/stores/recognition";
import { useUtilities } from "../../composables/useUtilities";

export default defineComponent({
  name: "RecognitionList",
  props: {
    type: { type: String, required: true },
  },
  data() {
    return {};
  },
  computed: {
    recognitions() {
      return useRecognitionStore().recognitions[this.type];
    },
  },
  created() {
    if (this.type === "given") {
      // load given
    } else {
      // load received
    }
  },
  methods: { useUtilities },
});
</script>

<style scoped lang="scss">
.recognition-card {
  box-shadow: rgba(60, 64, 68, 0.02) 0px 12px 5px,
    rgba(60, 64, 68, 0.02) 0px 8px 4px, rgba(60, 64, 68, 0.04) 0px 4px 3px,
    rgba(60, 64, 68, 0.06) 0px 1px 2px;
  margin-bottom: 1.25rem;
  background: white;
  border-radius: 1rem;
  border-width: 0;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  padding: 1rem;
  width: 40rem;
}
</style>
