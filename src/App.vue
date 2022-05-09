<template>
  <the-header appTitle="Vue Catchup!"></the-header>

  <the-layout-container>
    <TodoListContainer />

    <TabViewContainer />
  </the-layout-container>

  <ParentContainer />
</template>

<script>
import TodoListContainer from "./containers/TodoListContainer.vue";
import TabViewContainer from "./containers/TabViewContainer.vue";
import ParentContainer from "./containers/ParentContainer.vue";

import { ref } from "vue";
export default {
  name: "App",
  components: {
    TodoListContainer,
    TabViewContainer,
    ParentContainer,
  },
  setup() {
    const applicationName = ref("Vue Catchup!");

    const updateName = () => {
      applicationName.value = "Vue Catchup 3!";
    };

    return {
      applicationName,
      updateName,
    };
  },
};
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
