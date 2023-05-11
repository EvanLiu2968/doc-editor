<template>
  <div>
    <div class="side-box">
      <div class="side-box__title">
        操作测试
      </div>
      <el-button
        type="primary"
        @click="handleToggleEditorMode"
      >
        {{
          isEditing ? '退出编辑' : '编辑'
        }}
      </el-button>
      <el-button
        type="primary"
        @click="handleChangeTitle"
      >
        标题修改
      </el-button>
      <el-button
        type="primary"
        @click="getDocContent"
      >
        获取文档内容
      </el-button>
    </div>
    <div
      class="side-box"
      style="height: 1000px"
    >
      <div class="side-box__title">
        批注说明
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useEditorStore } from '@/store/modules/editor'
import { EditorMode } from '@/components/editor'

const editorStore = useEditorStore()
const editorMode = computed(() => {
  return editorStore.editorMode
})

const editor = window.__DocEditor

const isEditing = computed(() => {
  return editorMode.value === EditorMode.EDIT
})

const handleToggleEditorMode = () => {
  editorStore.setEditorMode(isEditing.value ? EditorMode.READONLY : EditorMode.EDIT)
}

const handleChangeTitle = () => {
  editor.command.executeMode(EditorMode.EDIT)
  editor.command.executeSearch('论大学生就业形势及就业难的解决方法')
  editor.command.executeReplace('测试')
  editor.command.executeMode(EditorMode.READONLY)
}

const getDocContent = () => {
  const docContent = editor.command.getValue()
  console.log(docContent.data.main)
}
</script>

<style lang="scss" scoped>
.side-box {
    padding: 20px;
    background: #fff;
    margin-bottom: 8px;
    min-height: 100px;
    text-align: left;
    font-size: 14px;
}
.side-box__title {
    border-left: 3px solid #005ce5;
    padding-left: 5px;
    font-size: 16px;
    line-height: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>
