import { defineStore } from 'pinia'

import {
  EditorMode
} from '@/components/editor'

interface IEditorState {
  editorMode: EditorMode
}

export const useEditorStore = defineStore({
  id: 'editor',
  state: (): IEditorState => {
    return {
      editorMode: EditorMode.READONLY
    }
  },
  actions: {
    setEditorMode(editorMode: EditorMode) {
      const editor = window.__DocEditor
      editor.command.executeMode(editorMode)
      this.editorMode = editorMode
    }
  }
})
