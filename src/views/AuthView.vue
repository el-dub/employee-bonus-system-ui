<template>
  <div class="main-content">
    <div class="card">
      <div>Please, sign in</div>
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Email" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            type="password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button href="#/profile" type="submit" variant="primary" class=""
          >Sign In</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.main-content {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr 23.5rem 1fr;
  grid-template-areas:
    ". . . "
    ". panel ."
    ". . .";
  height: 100%;
}

.card {
  background-color: #ffffffff;
  border-radius: 1rem;
  box-shadow: 0 0 1px 0 #43485614, 0 1px 2px 0 #4348560d, 0 5px 4px 0 #4348560a,
    0 11px 5px 0 #43485605, 0 19px 6px 0 #43485603;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  grid-area: panel;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}
</style>
