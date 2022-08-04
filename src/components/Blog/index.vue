<template>
  <div class="blog-container">
    <button v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab">
      {{tab}}
    </button>

    <Transiton>
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </Transiton>
  </div>
</template>

<script>
import Transiton from '@/components/Transiton/Transition.vue'
import TabA from '@/components/Blog/TabA.vue'
import TabB from '@/components/Blog/TabB.vue'
export default {
  name: 'Blog',
  components: { TabA, TabB, Transiton },
  data() {
    return {
      tabs: ['A', 'B'],
      currentTab: 'A',
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    },
  },
}
</script>

<style lang="less" scoped>
.blog-container {
  width: 500px;
  margin: 0 auto;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>