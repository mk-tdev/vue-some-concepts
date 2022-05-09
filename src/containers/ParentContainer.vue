<template>
  <div class="parent-container">
    Parent Container

    <div class="parent-child-container">
      <ChildComponentOne />
      <ChildComponentTwo />
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import ChildComponentOne from "../components/ChildComponentOne.vue";
import ChildComponentTwo from "../components/ChildComponentTwo.vue";

export default {
  name: "ParentContainer",
  components: {
    ChildComponentOne,
    ChildComponentTwo,
  },
  setup() {
    provide("parent-container", "some data from parent-container");
  },
};
</script>

<style lang="css" scoped>
.parent-container {
  padding: 1rem;
  margin: 2rem;
  border: 1px solid lightgray;
}
.parent-child-container {
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
}
</style>
