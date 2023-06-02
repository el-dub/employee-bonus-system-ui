<template>
  <div class="layout">
    <header class="w-full">
      <b-navbar toggleable="lg" type="dark" class="bg-blue-200">
        <!--        <b-navbar-brand href="#">NavBar</b-navbar-brand>-->
        <b-navbar-brand href="#">
          <!--          <img-->
          <!--            size="100px"-->
          <!--            src="https://kpi.ua/files/images-page/kpi-big-logo.png"-->
          <!--            alt="logo"-->
          <!--          />-->
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-nav pills>
            <b-nav-item
              v-for="item in navItems"
              :key="item.name"
              :active="item.name === routeName"
              :href="item.href"
              >{{ item.label }}
            </b-nav-item>
          </b-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!--            <b-nav-form>-->
            <!--              <b-form-input-->
            <!--                size="sm"-->
            <!--                class="mr-sm-2"-->
            <!--                placeholder="Search"-->
            <!--              ></b-form-input>-->
            <!--              <b-button size="sm" class="my-2 my-sm-0" type="submit"-->
            <!--                >Search</b-button-->
            <!--              >-->
            <!--            </b-nav-form>-->

            <!--            <b-nav-item-dropdown text="Lang" right>-->
            <!--              <b-dropdown-item href="#">EN</b-dropdown-item>-->
            <!--              <b-dropdown-item href="#">ES</b-dropdown-item>-->
            <!--              <b-dropdown-item href="#">RU</b-dropdown-item>-->
            <!--              <b-dropdown-item href="#">FA</b-dropdown-item>-->
            <!--            </b-nav-item-dropdown>-->

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar variant="primary" :text="useUserStore().initials" />
                <!--                <em>User</em>-->
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <nav v-if="showNav" class="w-full h-full">
      <slot name="nav"></slot>
    </nav>
    <main>
      <slot name="main"></slot>
      <!--      <RouterView />-->
    </main>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/useStore";

export default {
  name: "PageLayout",
  props: {
    showNav: { type: Boolean, default: true },
  },
  data() {
    return {
      navItems: [
        {
          name: "profile",
          label: "Profile",
          href: "/#/profile",
        },
        {
          name: "bonuses",
          label: "Bonuses",
          href: "/#/bonuses",
        },
        {
          name: "recognitions",
          label: "Recognitions",
          href: "/#/recognitions",
        },
        {
          name: "admin",
          label: "Admin",
          href: "/#/admin",
        },
      ],
    };
  },
  computed: {
    routeName() {
      return useRoute() ? useRoute().name : undefined;
    },
  },
  methods: { useUserStore },
};
</script>

<style lang="scss">
.layout {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 13.75rem 1fr;
  grid-template-rows: 4.5rem 1fr;
  grid-template-areas:
    "header header"
    "nav main";
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
  //padding: 1rem;rem
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top: none;
}

main {
  grid-area: main;
  padding: 2rem;
  background-color: #f7f8fb;
}
</style>
