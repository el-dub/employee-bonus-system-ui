<template>
  <div class="bonus-box">
    <div class="flex gap-3">
      <b-button
        pill
        variant="light"
        class="bg-light-grey"
        @click="addRecepient"
      >
        <b-avatar>
          <FontAwesomeIcon :icon="['fas', 'at']" />
        </b-avatar>
        Recipient
      </b-button>
      <b-button pill variant="light" class="bg-light-grey" @click="addAmount">
        <b-avatar>
          <FontAwesomeIcon :icon="['fas', 'plus']" />
        </b-avatar>
        Amount
      </b-button>
    </div>
    <b-form-textarea
      id="textarea"
      v-model="recognitionText"
      placeholder="Thank you for helping me in..."
      rows="3"
    ></b-form-textarea>
    <b-button
      variant="primary"
      class="align-self-end"
      style="background-color: #007bff"
      @click="giveRecognition"
      >Give recognition
    </b-button>
    <div v-if="validationError" class="validation-error">
      <FontAwesomeIcon icon="['fas', 'circle-exclamation]" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRecognitionStore } from "@/stores/recognition";

export default defineComponent({
  name: "RecognitionBox",
  components: { FontAwesomeIcon },
  data() {
    return {
      recognitionText: "",
      validationError: false,
    };
  },
  computed: {
    recipient() {
      return this.recognitionText
        .split(" ")
        .filter((word) => word.indexOf("@") !== -1)
        .map((r) => r.slice(1))[0];
    },
    amount() {
      return this.recognitionText
        .split(" ")
        .filter((word) => word.indexOf("+") !== -1)
        .map((r) => r.slice(1))[0];
    },
  },
  methods: {
    addRecepient() {
      this.recognitionText = this.recognitionText += "@";
    },
    addAmount() {
      this.recognitionText = this.recognitionText += "+";
    },
    giveRecognition() {
      useRecognitionStore().addRecognition({
        senderName: "Yelyzaveta Dubohryz",
        recipientName: this.recipient,
        amount: this.amount,
        text: this.recognitionText,
        date: "May 29th",
      });
      this.recognitionText = "";
    },
  },
});
</script>

<style scoped lang="scss">
.bonus-box {
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

.validation-error {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: #fff0f1;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  border-radius: 0.75rem;
  --alert-fg: #d82c2f;
  --alert-bg: #fff0f1;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
</style>
