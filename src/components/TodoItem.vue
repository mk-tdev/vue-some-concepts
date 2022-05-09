<template>
  <div
    class="todo-item"
    :class="{ done: todo.done, 'not-done': !todo.done, mobile: width < 600 }"
  >
    <div>
      <div :class="{ 'todo-completed': todo.done }">{{ todo.text }}</div>
      <div class="sub-text" :class="{ mobile: width < 600 }">
        {{ todo.timeCreated }}
      </div>
    </div>
    <div class="todo-item-actions">
      <button class="toggle" @click="toggleTodo">Toggle</button>
      <button class="remove" @click="removeTodo">Remove</button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useWindowResize } from "../hooks/useWindowResize";

export default {
  name: "TodoItem",
  props: ["todo"],
  emits: ["remove-todo", "toggle-todo"],
  components: {},
  setup(props, { emit }) {
    const { width, height } = useWindowResize();
    onMounted(() => {});

    const removeTodo = () => {
      emit("remove-todo", props.todo);
    };

    const toggleTodo = () => {
      emit("toggle-todo", props.todo);
    };

    return {
      removeTodo,
      toggleTodo,
      width,
      height,
    };
  },
};
</script>

<style lang="css" scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  gap: 10px;
  border: 1px solid #e8f9fd;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.todo-item.done {
  border-left: #069a8e 5px solid;
}
.todo-item.not-done {
  border-left: #eb5353 5px solid;
}
.sub-text {
  display: flex;
  font-size: 13px;
  color: gray;
}
button.toggle {
  padding: 8px 10px;
  border: 0;
  background-color: #79dae8;
  color: white;
  cursor: pointer;
}
button.remove {
  padding: 8px 10px;
  border: 0;
  background-color: #eb5353;
  color: white;
  cursor: pointer;
}
.todo-item-actions {
  display: flex;
  flex-wrap: nowrap;
}
.todo-completed {
  text-decoration: line-through;
}
.mobile {
  color: white;
  background-color: #333;
}
</style>
