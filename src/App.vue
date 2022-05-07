<template>
  <the-header appTitle="Vue Catchup!"></the-header>

  <the-layout-container>
    <TodoListContainer />

    <TabViewContainer />
  </the-layout-container>
</template>

<script>
import TodoListContainer from "./containers/TodoListContainer.vue";
import TabViewContainer from "./containers/TabViewContainer.vue";

export default {
  name: "App",
  components: {
    TodoListContainer,
    TabViewContainer,
  },
  setup() {},
};
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
