<template>
  <div>
    <h2>
      Todo List container ({{ `${todoStatus}/${todosState.todos.length}` }})
    </h2>

    <div class="todo-container">
      <div class="input-group">
        <input
          type="text"
          v-model="todosState.newTodoText"
          placeholder="new todo"
          @keydown.enter="addTodo"
        />

        <button @click="addTodo">Add</button>
        <span class="sub-text">{{ todosState.newTodoText }}</span>
        
        <span class="warn-text" v-if="showWarning"
          >Too Long! But it's okay!</span
        >
      </div>
      <TodoList
        :todos="todosState.todos"
        @remove-todo="removeTodo"
        @toggle-todo="toggleTodoStatus"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
import { ref, reactive, computed, watch, onMounted } from "vue";

import TodoList from "../components/TodoList.vue";

export default {
  name: "TodoListContainer",
  components: {
    TodoList,
  },
  setup() {
    const store = useStore();
    const showWarning = ref(false);
    const todosState = reactive({
      newTodoText: "",
      todos: [
        {
          id: uuidv4(),
          text: "Learn Vue",
          timeCreated: new Date(),
          done: false,
        },
        {
          id: uuidv4(),
          text: "Learn Vuex",
          timeCreated: new Date(),
          done: false,
        },
        {
          id: uuidv4(),
          text: "Learn Vue Router",
          timeCreated: new Date(),
          done: false,
        },
      ],
    });

    console.log(store.state);

    watch(todosState, (newValue) => {
      showWarning.value = newValue.newTodoText.length > 20;
      console.log(newValue);

      store.dispatch("todos/updateTooMany");
    });

    const todoStatus = computed(() => {
      // calling 

      return todosState.todos.filter((todo) => !todo.done).length;
    });

    const addTodo = () => {
      const newtodo = {
        id: uuidv4(),
        text: todosState.newTodoText,
        timeCreated: new Date(),
        done: false,
      };
      todosState.todos = [newtodo, ...todosState.todos];
      store.dispatch("todos/addTodo", newtodo);

      todosState.newTodoText = "";
    };

    const toggleTodoStatus = (todo) => {
      todosState.todos = todosState.todos.map((t) => {
        if (t.id === todo.id) {
          t.done = !t.done;
        }
        return t;
      });
    };

    const removeTodo = (todo) => {
      todosState.todos = todosState.todos.filter((t) => t.id !== todo.id);
      store.dispatch("todos/setTodos", todosState.todos);
      store.dispatch("todos/updateTooMany");
    };

    onMounted(() => store.dispatch("todos/setTodos", todosState.todos));

    return {
      todosState,
      addTodo,
      removeTodo,
      todoStatus,
      toggleTodoStatus,
      showWarning,
    };
  },
};
</script>

<style lang="css" scoped>
.todo-container {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}
.input-group {
  margin: 1rem 0;
}
input {
  padding: 9px;
  border: #069a8e 1px solid;
  outline: none;
}

button {
  background-color: #069a8e;
  border: 0;
  color: white;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
}
.sub-text {
  display: flex;
  font-size: 15px;
  color: gray;
}
.warn-text {
  display: flex;
  font-size: 15px;
  color: rgb(161, 0, 0);
}
</style>
