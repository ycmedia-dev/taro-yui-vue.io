
# 图片上传 y-upload

支持单选/多选/指定数量/视频

### 组件名称

y-upload

### 关联组件

1. y-textarea
2. y-date-picker
3. y-upload

::: tip 配置（app.ts）
import { uploadKey } from 'taro-yui-vue/src/components/upload/token'\
app.provide(uploadKey,{\
  getSignatureUrl: "https://yy.bcadx.com/upload/get_signature",\
  bucket: 'yyres-bcadx-com',\
  operator: 'lmm2019'\
})
:::

### 基础用法

<ClientOnly>
  <demo-block url="/pages/upload/basic/upload">
<<< ../taro-yui-vue-demo/src/pages/upload/basic/upload.vue
  </demo-block>
</ClientOnly>

### 多选

<ClientOnly>
  <demo-block url="/pages/upload/multiple/upload">
<<< ../taro-yui-vue-demo/src/pages/upload/multiple/upload.vue
  </demo-block>
</ClientOnly>

### 属性

<<< ../taro-yui-vue/src/components/upload/types/upload.d.ts#UploadTypeEnum
<<< ../taro-yui-vue/src/components/upload/types/upload.d.ts#props

### 事件

<<< ../taro-yui-vue/src/components/upload/types/upload.d.ts#events
