<template>
  <div class="correct-container" :class="{'is-editing': editorMode === EditorMode.EDIT}">
    <EditorMenu v-if="isDocInited" :isEditing="editorMode === EditorMode.EDIT" />
    <div class="doc-container" :class="{'is-editing': editorMode === EditorMode.EDIT}">
      <div class="doc-editor" />
    </div>
    <EditorFooter v-if="isDocInited" :isEditing="editorMode === EditorMode.EDIT" />
    <div class="doc-side-right" :class="{'is-editing': editorMode === EditorMode.EDIT}">
      <SideRight
        v-if="isDocInited"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import Editor, {
  IEditorOption,
  BlockType,
  Command,
  ControlType,
  EditorMode,
  ElementType,
  IBlock,
  IElement,
  KeyMap,
  ListStyle,
  ListType,
  PageMode,
  PaperDirection,
  RowFlex,
  TitleLevel
} from '@/components/editor'
import { data } from './mockData'
import EditorMenu from './editor-menu.vue'
import EditorFooter from './editor-footer.vue'
import SideRight from './side-right.vue'
import { useEditorStore } from '@/store/modules/editor'

const editorStore = useEditorStore()
const editorMode = computed(() => {
  return editorStore.editorMode
})

const isDocInited = ref(false)

const options: IEditorOption = {
  mode: editorMode.value, // 'edit' | 'clean' | 'readonly'
  width: 794, // 纸张宽度。默认：794
  height: 1123, // 纸张高度。默认：1123
  margins: [100, 120, 100, 120],
  // watermark: {
  //     data: '格子达',
  //     size: 120,
  // },
  pageNumber: {
    format: '第{pageNo}页/共{pageCount}页'
  }
}

onMounted(() => {
  // 初始化编辑器
  const container = document.querySelector<HTMLDivElement>('.doc-editor')!
  window.__DocEditor = new Editor(
    container,
    {
      main: data as any
    },
    options
  )
  console.log('实例: ', window.__DocEditor)
  isDocInited.value = !!window.__DocEditor
  console.log(data)
})
</script>

<style lang="scss">
.correct-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
    background: #f5f6f7;
    display: flex;
    &.is-editing {
      padding-top: 60px;
      height: calc(100vh - 140px);
    }
    ::-webkit-scrollbar {
        height: 16px;
        width: 16px;
        overflow: visible;
    }

    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ddd;
        background-clip: padding-box;
        border: 4px solid #f2f4f7;
        border-radius: 8px;
        min-height: 24px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #c9c9c9;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        background-clip: padding-box;
    }
}
.doc-container {
    position: relative;
    margin: 20px auto;
    width: 810px;
    height: calc(100vh - 120px);
    overflow-y: auto;
    &.is-editing {
        height: calc(100vh - 180px);
    }
}
.doc-side-right {
    flex: 1;
    max-width: 500px;
    margin: 20px 0;
    height: calc(100vh - 120px);
    overflow-y: auto;
    &.is-editing {
        height: calc(100vh - 180px);
    }
}
.doc-editor {
    position: relative;
}
.ce-page-container canvas {
    box-shadow: rgb(158 161 165 / 40%) 0px 2px 12px 0px;
}
.ce-contextmenu-signature {
    background-image: url('~@/assets/editor/signature.svg');
}
</style>
