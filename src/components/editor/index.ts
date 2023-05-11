import {
  Editor,
  RowFlex,
  VerticalAlign,
  EditorZone,
  EditorMode,
  ElementType,
  ControlType,
  EditorComponent,
  EDITOR_COMPONENT,
  PageMode,
  ImageDisplay,
  Command,
  KeyMap,
  BlockType,
  PaperDirection,
  TableBorder,
  MaxHeightRatio,
  NumberType,
  TitleLevel,
  ListType,
  ListStyle
} from '@hufe921/canvas-editor'

import type {
  IElement,
  IEditorData,
  IEditorOption,
  IEditorResult,
  IContextMenuContext,
  IRegisterContextMenu,
  IWatermark,
  INavigateInfo,
  IBlock,
  ILang
} from '@hufe921/canvas-editor'

export default Editor

// 对外对象
export {
  Editor,
  RowFlex,
  VerticalAlign,
  EditorZone,
  EditorMode,
  ElementType,
  ControlType,
  EditorComponent,
  EDITOR_COMPONENT,
  PageMode,
  ImageDisplay,
  Command,
  KeyMap,
  BlockType,
  PaperDirection,
  TableBorder,
  MaxHeightRatio,
  NumberType,
  TitleLevel,
  ListType,
  ListStyle
}

// 对外类型
export type {
  IElement,
  IEditorData,
  IEditorOption,
  IEditorResult,
  IContextMenuContext,
  IRegisterContextMenu,
  IWatermark,
  INavigateInfo,
  IBlock,
  ILang
}
