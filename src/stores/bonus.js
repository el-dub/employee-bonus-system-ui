import { defineStore } from "pinia";
import { useDataService } from "@/composables/useDataService";

export const useBonusStore = defineStore("bonus", {
  state: () => {
    return {
      categories: [
        {
          name: "clothing-and-accessories",
          label: "Clothing and Accessories",
          icon: ["fas", "shirt"],
        },
        // { name: "cosmetics", label: "Cosmetics", icon: ["fas", "soap"] },
        // {
        //   name: "restaurants-and-catering",
        //   label: "Restaurants and Catering",
        //   icon: ["fas", "bowl-food"],
        // },
        { name: "kids", label: "Kids", icon: ["fas", "child"] },
        // { name: "education", label: "Education", icon: ["fas", "book"] },
        { name: "home", label: "Home", icon: ["fas", "house"] },
      ],
      bonuses: [
        {
          id: 1,
          name: "Coupon for Ikea",
          description: "Furniture and interior design for your home",
          price: 100,
          startTime: "2022-01-25T21:34:55",
          endTime: "2023-09-25T21:34:55",
          mainImage:
            "https://lh3.googleusercontent.com/p/AF1QipM26xsQqwiC5FQBER3972vd2IneysOXMotI07-7=w1080-h608-p-no-v0",
          category: { name: "home" },
          couponCode: "IKEA1234",
        },
        {
          id: 2,
          name: "Designer Brands at TK Maxx",
          description: "Hunt for stylish gems and unique products",
          price: 100,
          mainImage:
            "https://pliki.propertynews.pl/i/08/27/93/082793_r0_940.jpg",
          startTime: "2022-01-25T21:34:55",
          endTime: "2023-09-25T21:34:55",
          category: { name: "clothing-and-accessories" },
          categoryId: "1cd48fe3-e9f6-426e-8cde-8e52ac70c4b8",
          couponCode: "TKMAXX1234",
        },
        {
          id: 3,
          name: "Coupon for H&M",
          description: "Highest quality fashion at a good price",
          price: 100,
          mainImage:
            "https://pliki.propertynews.pl/i/07/67/81/076781_r0_940.jpg",
          startTime: "2022-01-25T21:34:55",
          endTime: "2023-09-25T21:34:55",
          category: { name: "clothing-and-accessories" },
          couponCode: "HM1234",
        },
        {
          id: 4,
          name: "Nintendo eshop games",
          description: "The best console games",
          price: 100,
          mainImage:
            "https://static.komputronik.pl/product-picture/11/NINTENDOSWITCHRB19-1.jpg",
          startTime: "2022-01-25T21:34:55",
          endTime: "2023-09-25T21:34:55",
          category: { name: "kids" },
          // categoryId: "58ee86ff-cbfc-4ca1-b497-0ec81878116b",
          couponCode: "NINTENDO1234",
        },
        {
          id: 5,
          name: "Custom Bonus",
          description: "Meeting with CEO",
          price: 100,
          startTime: "2022-01-25T21:34:55",
          endTime: "2023-09-25T21:34:55",
          category: { name: "company-specials" },
          // categoryId: "58ee86ff-cbfc-4ca1-b497-0ec81878116b",
          couponCode: "CODE123",
        },
      ],
      perPage: 20,
      selectedCategory: "home",
      currentId: 2,
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
    geById(state) {
      return (id) => state.bonuses.filter((b) => b.id === id)[0];
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

    addCustomBonus() {
      this.categories.push({
        name: "company-specials",
        label: "Company Specials",
        icon: ["fas", "star"],
      });
    },

    async loadBonuses() {
      console.log("LOAD CATEGORIES", await useDataService().getCategories());
      // this.bonuses = await useDataService().getBonuses();
    },
  },
});
