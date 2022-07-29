<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"
             v-model="isAll"
             @change="checkAll(!isAllSelect)">
    </label>
    <span>
      {{done}} / {{total}}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ['done', 'total', 'isAll', 'checkAll'],
  name: 'TodoFooter',
  data() {
    return {
      isAllSelect: this.isAll,
    }
  },
}
</script>

<style lang="less" scoped>
</style>