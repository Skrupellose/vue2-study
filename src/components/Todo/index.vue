<template>
  <div class="todo-container">
    <todo-header :addTodo="addTodo" />
    <todo-list :lists="listArr"
               :checkTodo="checkTodo"
               :delTodo="delTodo" />
    <todo-footer :total="total"
                 :done="done"
                 :isAll="isAll"
                 :checkAll="checkAll" />
  </div>
</template>


<script>
import TodoHeader from '@/components/Todo/TodoHeader.vue'
import TodoList from '@/components/Todo/TodoList.vue'
import TodoFooter from '@/components/Todo/TodoFooter.vue'
export default {
  name: 'Todo',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      listArr: [
        { id: '001', content: '敲代码', done: false },
        { id: '002', content: '吃早饭', done: false },
        { id: '003', content: '出门', done: false },
      ],
    }
  },
  methods: {
    addTodo(todoObj) {
      this.listArr.unshift(todoObj)
    },
    checkTodo(id) {
      console.log(`change ${id}`)
      this.listArr.forEach((list) => {
        if (list.id === id) {
          list.done = !list.done
        }
      })
    },
    delTodo(id) {
      console.log(`del ${id}`)
      this.listArr.map((list, i) => {
        if (list.id === id) {
          this.listArr.splice(i, 1)
        }
      })
    },
    checkAll(flag) {
      this.listArr.forEach((list) => {
        list.done = flag
      })
    },
  },
  computed: {
    total() {
      return this.listArr.length
    },
    done() {
      return this.listArr.reduce((v, c) => {
        c = c.done ? 1 : 0
        return v + c
      }, 0)
    },
    isAll: {
      set(value) {
        this.checkAll(value)
      },
      get() {
        return this.total === this.done && this.total > 0
      },
    },
  },
}
</script>
<style lang="less">
@import url('@/assets/less/app.less');
.todo-container {
  width: 500px;
  margin: 0 auto;
  padding: 10px;
}
</style>