<template>
  <div class="todo-header">
    <input type="text"
           v-model="content"
           @keyup.enter="add"
           placeholder="input your plan">
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  props: ['addTodo'],
  name: 'TodoHeader',
  data() {
    return {
      content: '',
    }
  },
  methods: {
    add(e) {
      if (!this.content.trim()) return alert('输入为空')
      const listObj = { id: nanoid(), content: this.content, done: false }
      console.log(listObj)
      this.content = ''
      this.addTodo(listObj)
    },
  },
}
</script>

<style lang="less" scoped>
.todo-header {
  height: 35px;
  input {
    width: 500px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
}
.todo-header input:focus {
  outline: none;
  border: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>