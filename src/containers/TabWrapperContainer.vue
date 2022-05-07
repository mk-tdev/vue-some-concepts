<template>
  <div class="tabs">
    <h2>Tab container</h2>
    <ul>
      <li
        v-for="title in tabsTitles"
        :key="title"
        :class="{ selected: title === selectedTab }"
        @click="updateSelectedTab(title)"
      >
        {{ title }}
      </li>
    </ul>
    <div class="slot-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  name: "TabWrapperContainer",
  components: {},
  setup(props, { slots }) {
    const tabsTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTab = ref(tabsTitles.value[0]);

    provide("selectedTab", selectedTab);

    const updateSelectedTab = (title) => {
      selectedTab.value = title;
    };

    return {
      tabsTitles,
      selectedTab,
      updateSelectedTab,
    };
  },
};
</script>

<style lang="css" scoped>
.tabs {
}
.tabs ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
}
.tabs li {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-right: 1rem;
}
.tabs li:hover {
  background-color: #13d6c6;
  color: white;
}
.slot-container {
  margin: 1rem 0;
}
.selected {
  background-color: #069a8e;
  color: white;
}
</style>
