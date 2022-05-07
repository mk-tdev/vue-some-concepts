<template>
  <div class="tab-content" v-show="title === selectedTab">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Tab",
  props: ["title"],
  components: {},
  setup() {
    const selectedTab = inject("selectedTab");

    return {
      selectedTab,
    };
  },
};
</script>

<style lang="css" scoped>
.tab-content {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}
</style>
