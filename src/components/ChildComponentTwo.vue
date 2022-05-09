<template>
  <div class="child-container">
    <h2>ChildComponentTwo</h2>
    <p>{{ injectedValue2 }}</p>
    <NestedChildComponent />
  </div>
</template>

<script>
import { inject, provide } from "vue";
import NestedChildComponent from "./NestedChildComponent.vue";

export default {
  name: "ChildComponentTwo",
  components: {
    NestedChildComponent,
  },
  setup() {
    provide("child-two", "some data from child-two");
    const injectedValue2 = inject("parent-container");

    return {
      injectedValue2,
    };
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
