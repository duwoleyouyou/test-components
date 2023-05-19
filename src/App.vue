<template>
  <div class="wei-app">
    <h1>
      first blood
    </h1>
    <hr>
      <div>
        <test-button @save="test" testString="测试字符串">按钮组件</test-button>
        <test-button style="margin-left: 12px" disabled>按钮组件</test-button>
      </div>
    </div>
</template>

<script lang="ts" setup>
  const test = (str: string) => {
    console.log('页面使用', str)
  }
</script>