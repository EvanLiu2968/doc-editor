<template>
    <div>
        <div class="doc-editor"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Editor, {
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
    TitleLevel,
} from '@/editor';
import { data, options } from './mock'

let instance = null;
onMounted(() => {
    const container = document.querySelector<HTMLDivElement>('.doc-editor')!
    instance = new Editor(
        container,
        {
        header: [{
            value: '第一人民医院',
            size: 32,
            rowFlex: RowFlex.CENTER
        }, {
            value: '\n门诊病历',
            size: 18,
            rowFlex: RowFlex.CENTER
        }, {
            value: '\n',
            type: ElementType.SEPARATOR
        }],
        main: <IElement[]>data,
        footer: [{
            value: 'doc-editor',
            size: 12
        }]
        },
        options
    )
    console.log('实例: ', instance)
})
// 初始化编辑器

</script>

<style lang="scss" scoped>
.doc-header {
    height: 60px;
}
</style>
