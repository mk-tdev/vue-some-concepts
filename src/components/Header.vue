<template>
  <div class="header">
    <div class="left">
      <img alt="Vue logo" src="../assets/logo.png" />
      <span>{{ appTitle }}</span>
    </div>

    <div class="warning" v-if="isItTooMany">Too Many</div>
    <div class="info" v-if="!isItTooMany">Can Manage</div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Header",
  components: {},
  props: ["appTitle"],
  setup() {
    const store = useStore();

    const isItTooMany = computed(() => {
      console.log(store.getters.todos);
      return store.getters.todos.isItTooMany;
    });

    onMounted(() => {
      // console.log("Header mounted: ", props);
    });

    return {
      isItTooMany,
    };
  },
};
</script>

<style lang="css" scoped>
div.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

div.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

div.header span {
  font-size: 1.5rem;
}

img {
  height: 2rem;
}

div.warning {
  color: red;
}
div.info {
  color: rgb(21, 57, 172);
}
</style>
