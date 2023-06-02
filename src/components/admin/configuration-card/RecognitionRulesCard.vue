<template>
  <div class="text-dark-blue font-bold text-xl mb-4">Manage Reward Rules</div>
  <b-button v-b-modal:create-reward-modal variant="primary"
    >Create Reward Rule
  </b-button>
  <b-modal
    id="create-reward-modal"
    title="Add Recognition Rule"
    ok-title="Create Rules"
    @ok="createRecognition"
  >
    <b-form-group
      id="bonus-name"
      label="Recognition Name:"
      label-for="bonus-name"
    >
      <b-form-input
        id="rule-name"
        v-model="recognition.name"
        type="text"
        placeholder="Recognition Name"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="recognition-budget"
      label="Budget (points):"
      label-for="recognition-budget"
    >
      <b-form-input
        id="recognition-budget"
        v-model="recognition.price"
        type="number"
        class="mb-2"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="recognition-matcher"
      label="Match all the conditions or just one of them:"
      label-for="bonus-description"
    >
      <b-form-select
        v-model="recognition.matcher"
        :options="matchers"
      ></b-form-select>
    </b-form-group>

    <!--    <b-form-group-->
    <!--      id="bonus-price"-->
    <!--      label="Bonus Price (points):"-->
    <!--      label-for="bonus-price"-->
    <!--    >-->
    <!--      <b-form-input-->
    <!--        id="bonus-price"-->
    <!--        v-model="recognition.price"-->
    <!--        type="number"-->
    <!--        class="mb-2"-->
    <!--        required-->
    <!--      ></b-form-input>-->
    <!--    </b-form-group>-->

    <div class="flex flex-col gap-3">
      <div v-for="(rule, i) in recognition.rules" :key="i" class="flex gap-3">
        <b-form-select v-model="rule.type" :options="ruleTypes"></b-form-select>
        <div>=</div>
        <b-form-select
          v-if="rule.type !== 'email'"
          v-model="rule.value"
          :options="options[rule.type]"
        ></b-form-select>
        <b-form-input
          v-if="rule.type === 'email'"
          v-model="rule.value"
          type="email"
          class="mb-2"
        ></b-form-input>
      </div>
    </div>
  </b-modal>
  <div v-if="showList" class="recognition-card mt-4">
    <div class="flex text-xl te">
      <div class="mr-4 font-bold">Additional Recognition</div>
      <div>100 points</div>
    </div>
    <div class="flex">
      <div class="mr-4 font-bold">Position:</div>
      <div>Software Engineer</div>
    </div>
    <div class="flex">
      <div class="mr-4 font-bold">Department</div>
      <div>Java Department</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecognitionRulesCard",
  data() {
    return {
      recognition: {
        name: "",
        startDate: new Date(),
        endDate: new Date(),
        rules: [
          {
            type: "position",
            value: "Software Engineer",
          },
          {
            type: "department",
            value: "Java Department",
          },
          {
            type: "email",
            value: "",
          },
        ],
        matcher: "AND",
      },
      ruleTypes: ["position", "department", "email"],
      matchers: ["AND", "OR"],
      options: {
        department: [
          "Java Department",
          "Front-end Department",
          "Automation QA Department",
          "Business Analytics Department",
        ],
        position: [
          "Associate Software Engineer",
          "Software Engineer",
          "Senior Software Engineer",
        ],
      },
      showList: false,
    };
  },
  methods: {
    createRecognition() {
      this.showList = true;
      console.log("Create recognition");
    },
  },
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
