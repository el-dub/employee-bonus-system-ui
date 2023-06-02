<template>
  <PageLayout>
    <template #nav>
      <TabSelector v-model:selectedTabName="selectedTabName" :tabs="tabs" />
    </template>
    <template #main>
      <RecognitionBox v-if="selectedTabName === 'give'" />
      <RecognitionList v-else-if="selectedTabName === 'given'" type="given" />
      <RecognitionList v-else type="received" />
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/components/layout/PageLayout.vue";
import RecognitionBox from "@/components/recognitions/RecognitionBox.vue";
import TabSelector from "@/components/common/TabSelector.vue";
import RecognitionList from "@/components/recognitions/RecognitionList.vue";

export default {
  name: "RecognitionsView",
  components: { RecognitionList, TabSelector, RecognitionBox, PageLayout },
  data() {
    return {
      tabs: [
        {
          name: "give",
          label: "Give recognition",
          icon: ["fas", "award"],
        },
        {
          name: "given",
          label: "Given recognitions",
          icon: ["fas", "clock-rotate-left"],
        },
        {
          name: "received",
          label: "Received recognitions",
          icon: ["fas", "users"],
        },
      ],
      selectedTabName: "give",
    };
  },
};
</script>

<style scoped lang="scss"></style>
