<template>
  <li>
    <label @change="checkTodo(todo.id)">
      <input type="checkbox">
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger"
            style=""
            @click="delTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'checkTodo', 'delTodo'],
}
</script>

<style lang="less" scoped>
div {
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    label {
      float: left;
      cursor: pointer;
    }
    button {
      float: right;
      display: none;
      margin-top: 3px;
    }
  }
  li:last-child {
    border-bottom: none;
  }
  li:before {
    content: initial;
  }
}

li label,
li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
</style>