# 表单 y-form

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据；
支持编辑/浏览模式：pattern = edit / view
[YFormElType.DATE_PICKER, YFormElType.DATE_TIME_PICKER, YFormElType.CUSTOM_SELECTOR, YFormElType.SELECTOR]支持清除配置，默认必填的不可清除

### 组件名称

y-form

### 依赖组件

1. y-form-item-checkbox-group
2. y-textarea
3. y-date-picker
4. y-date-time-picker
5. y-upload
6. y-form-item-picker


### 基础用法

<ClientOnly>
  <demo-block url="/pages/form/edit/form">
<<< ../taro-yui-vue-demo/src/pages/form/edit/form.vue
  </demo-block>
</ClientOnly>

### 浏览模式

<ClientOnly>
  <demo-block url="/pages/form/view/form">
<<< ../taro-yui-vue-demo/src/pages/form/view/form.vue
  </demo-block>
</ClientOnly>

### 属性

<<< ../taro-yui-vue/src/components/form/types/form.d.ts#YFormElType
<<< ../taro-yui-vue/src/components/checkbox/types/checkbox.d.ts#YCheckboxType
<<< ../taro-yui-vue/src/components/form/types/form.d.ts#props


### Slots
| name | 说明 |
|------|--------|
| ${property}-right | 表单项右侧内容 |
| ${property} | 表单项 |
