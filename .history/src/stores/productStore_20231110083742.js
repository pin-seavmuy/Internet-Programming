import { defineStore } from "pinia";

export const useTodoStore = defineStore("productStore", {
  state: () => ({
    group: ["Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Ve"],
  }),
  getters: {
    
  },
  actions: {
    
  },
});
