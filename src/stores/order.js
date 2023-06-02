import { defineStore } from "pinia";
import { useDataService } from "@/composables/useDataService";

export const useOrderStore = defineStore("order", {
  state: () => {
    return {
      categories: [
        {
          name: "company-specials",
          label: "Company Specials",
          icon: ["fas", "star"],
        },
        {
          name: "clothing-and-accessories",
          label: "Clothing and Accessories",
          icon: ["fas", "shirt"],
        },
        { name: "cosmetics", label: "Cosmetics", icon: ["fas", "soap"] },
        {
          name: "restaurants-and-catering",
          label: "Restaurants and Catering",
          icon: ["fas", "bowl-food"],
        },
        { name: "kids", label: "Kids", icon: ["fas", "child"] },
        { name: "education", label: "Education", icon: ["fas", "book"] },
        { name: "home", label: "Home", icon: ["fas", "house"] },
      ],
      orders: [
        {
          id: 1,
          name: "Coupon for Ikea",
          description: "Furniture and interior design for your home",
          price: 100,
          mainImage: "https://picsum.photos/600/300/?image=25",
          category: { name: "home" },
        },
      ],
      perPage: 20,
      selectedCategory: "home",
    };
  },
  getters: {
    filteredBonuses(state) {
      return state.bonuses.filter(
        (b) => b.category.name === state.selectedCategory
      );
    },
    bonusesSize(state) {
      return state.bonuses.length;
    },
    filteredBonusesSize(state) {
      return state.filteredBonuses.length;
    },
    bonusPage(state) {
      return (pageNumber) => {
        const start = (pageNumber - 1) * state.perPage;
        const lastIndex = pageNumber * state.perPage;
        const end =
          lastIndex < state.filteredBonusesSize
            ? lastIndex
            : state.filteredBonusesSize;
        return state.filteredBonuses.slice(start, end);
      };
    },
  },
  actions: {
    selectCategory(category) {
      console.log("STORE selectCategory", category);
      this.selectedCategory = category;
      console.log("STORE", this.selectedCategory);
    },

    async loadCategories() {
      console.log("LOAD CATEGORIES", await useDataService().getCategories());
      // this.categories = await useDataService().getCategories();
    },

    addCustomBonus(bonus) {
      this.bonuses.push({
        name: bonus.name,
        description: bonus.description,
      });
    },

    async loadBonuses() {
      console.log("LOAD CATEGORIES", await useDataService().getCategories());
      // this.bonuses = await useDataService().getBonuses();
    },
  },
});
