<template>
  <div>
    <template v-if="todos.length > 0">
      <div v-for="todo in todos" :key="todo.id" class="todo-list">
        <TodoItem
          :todo="todo"
          @remove-todo="removeTodo"
          @toggle-todo="toggleTodo"
        />
      </div>
    </template>
    <div v-else>
      <p>No To-dos yet!</p>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: ["todos"],
  emits: ["remove-todo", "toggle-todo"],
  components: {
    TodoItem,
  },
  setup(props, { emit }) {
    const removeTodo = (todo) => {
      emit("remove-todo", todo);
    };

    const toggleTodo = (todo) => {
      emit("toggle-todo", todo);
    };

    return {
      removeTodo,
      toggleTodo,
    };
  },
};
</script>

<style lang="css" scoped>
.todo-list {
  margin: 10px 0;
}
</style>
