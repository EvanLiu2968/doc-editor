import { ElementType } from '../enum/Element'
import { IElement } from '../../interface/Element'

export const EDITOR_ELEMENT_STYLE_ATTR: Array<keyof IElement> = [
  'bold',
  'color',
  'highlight',
  'font',
  'size',
  'italic',
  'underline',
  'strikeout'
]

export const EDITOR_ELEMENT_COPY_ATTR: Array<keyof IElement> = [
  'type',
  'font',
  'size',
  'bold',
  'color',
  'italic',
  'highlight',
  'underline',
  'strikeout',
  'rowFlex',
  'url',
  'hyperlinkId',
  'dateId',
  'dateFormat'
]

export const EDITOR_ELEMENT_ZIP_ATTR: Array<keyof IElement> = [
  'type',
  'font',
  'size',
  'bold',
  'color',
  'italic',
  'highlight',
  'underline',
  'strikeout',
  'rowFlex',
  'rowMargin',
  'dashArray',
  'trList',
  'borderType',
  'width',
  'height',
  'url',
  'colgroup',
  'valueList',
  'control',
  'checkbox',
  'dateFormat',
  'block',
  'level',
  'listType',
  'listStyle',
  'listWrap'
]

export const EDITOR_ELEMENT_CONTEXT_ATTR: Array<keyof IElement> = [
  'tdId',
  'trId',
  'tableId',
  'level',
  'titleId',
  'listId',
  'listType',
  'listStyle'
]

export const TEXTLIKE_ELEMENT_TYPE: ElementType[] = [
  ElementType.TEXT,
  ElementType.HYPERLINK,
  ElementType.SUBSCRIPT,
  ElementType.SUPERSCRIPT,
  ElementType.CONTROL,
  ElementType.DATE
]

export const INLINE_ELEMENT_TYPE: ElementType[] = [
  ElementType.BLOCK,
  ElementType.PAGE_BREAK,
  ElementType.SEPARATOR,
  ElementType.TABLE
]

export const INLINE_NODE_NAME: string[] = [
  'HR',
  'TABLE',
  'UL',
  'OL'
]

export const VIRTUAL_ELEMENT_TYPE: ElementType[] = [
  ElementType.TITLE,
  ElementType.LIST
]