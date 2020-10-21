<!--  -->
<template>
  <div class='tab-control'>
    <div class="tab-control-item"
         v-for='(item, index) in title' 
        :class="{active: index === currentIndex}" @click="itemClick(index)">
        <!-- currentIndex =>记录当前谁被选中 -->
        <!-- itemClick => 监听点击 -->
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0    //记录当前谁被选中
    }
  },
  methods: {
    itemClick(index) {   //监听点击 
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>