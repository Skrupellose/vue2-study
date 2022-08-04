<template>
  <ul class="todo-body">
    <todo-item v-for="list in todoLists"
               :key="list.id"
               :todo="list"
               :checkTodo="checkTodo"
               :delTodo="delTodo" />
  </ul>
</template>

<script>
import TodoItem from '@/components/Todo/TodoItem.vue'
export default {
  name: 'TodoList',
  props: ['lists', 'checkTodo', 'delTodo'],
  components: { TodoItem },
  data() {
    return {
      todoLists: this.lists,
    }
  },
}
</script>

<style lang="less" scoped>
.todo-body {
  margin-top: 7px;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 5px;
  margin-top: 20px;
}
</style>