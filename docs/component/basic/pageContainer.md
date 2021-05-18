# 页面容器 y-page-container

用于计算内容区高度，兼容pc端。内部支持填充：y-search-bar、y-fixed-button

### 组件名称

y-page-container

### 基础用法

<ClientOnly>
  <demo-block url="/pages/pageContainer/pageContainer/pageContainer">
<<< ../taro-yui-vue-demo/src/pages/pageContainer/pageContainer/pageContainer.vue
  </demo-block>
</ClientOnly>

### 顶部填充

<ClientOnly>
  <demo-block url="/pages/pageContainer/header/pageContainer">
<<< ../taro-yui-vue-demo/src/pages/pageContainer/header/pageContainer.vue
  </demo-block>
</ClientOnly>

### 底部填充

<ClientOnly>
  <demo-block url="/pages/pageContainer/footer/pageContainer">
<<< ../taro-yui-vue-demo/src/pages/pageContainer/footer/pageContainer.vue
  </demo-block>
</ClientOnly>

### 完整用法

<ClientOnly>
  <demo-block url="/pages/pageContainer/full/pageContainer">
<<< ../taro-yui-vue-demo/src/pages/pageContainer/full/pageContainer.vue
  </demo-block>
</ClientOnly>

### 事件
<<< ../taro-yui-vue/src/components/pageContainer/types/pageContainer.d.ts#events

### Slots
| name | 说明 |
|------|--------|
| header | 头部 |
| footer | 尾部 |