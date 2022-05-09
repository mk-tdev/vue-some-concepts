<template>
  <div class="child-container">
    <h2>ChildComponentOne</h2>
  </div>
</template>

<script>
import { provide } from "vue";

export default {
  name: "ChildComponentOne",
  components: {},
  setup() {
    provide("child-one", "some data from child-one");

    return {};
  },
};
</script>

<style lang="css" scoped>
.child-container {
  padding: 1rem;
  margin: 1rem;
  border: 1px solid lightgray;
}
</style>
