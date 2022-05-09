<template>
  <div class="child-container">
    <h2>NestedChildComponent</h2>
    <p>
      {{ injectedValue }}
    </p>
    <p>
      {{ injectedValue2 }}
    </p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "NestedChildComponent",
  components: {},
  setup() {
    const injectedValue = inject("child-two");
    const injectedValue2 = inject("parent-container");

    return {
      injectedValue,
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
