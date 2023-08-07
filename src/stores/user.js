import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "anderson developer",
  });

  if (localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user"));
  }

  watch(
    user,
    (userVal) => {
      localStorage.setItem("user", JSON.stringify(userVal));
    },
    { deep: true }
  );
  // getters using computed property
  const uppercaseName = computed(() => {
    return user.value.name.toUpperCase();
  });

  const greeting = computed(() => {
    return `Hello 👋, ${user.value.name}!`;
  });
  // in action define a method
  const changeName = (newName) => {
    user.value.name = newName;
  };

  return {
    user,
    uppercaseName,
    greeting,
    changeName,
  };
});
