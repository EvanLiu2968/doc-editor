<template>
  <div
    class="menu"
    editor-component="menu"
    v-show="props.isEditing"
  >
    <div class="menu-item">
      <div class="menu-item__undo">
        <i />
      </div>
      <div class="menu-item__redo">
        <i />
      </div>
      <div
        class="menu-item__painter"
        title="格式刷(双击可连续使用)"
      >
        <i />
      </div>
      <div
        class="menu-item__format"
        title="清除格式"
      >
        <i />
      </div>
    </div>
    <div class="menu-divider" />
    <div class="menu-item">
      <div class="menu-item__font">
        <span
          class="select"
          title="字体"
        >微软雅黑</span>
        <div class="options">
          <ul>
            <li
              data-family="Yahei"
              style="font-family: 'Yahei'"
            >
              微软雅黑
            </li>
            <li
              data-family="宋体"
              style="font-family: '宋体'"
            >
              宋体
            </li>
            <li
              data-family="黑体"
              style="font-family: '黑体'"
            >
              黑体
            </li>
            <li
              data-family="仿宋"
              style="font-family: '仿宋'"
            >
              仿宋
            </li>
            <li
              data-family="楷体"
              style="font-family: '楷体'"
            >
              楷体
            </li>
            <li
              data-family="等线"
              style="font-family: '等线'"
            >
              等线
            </li>
            <li
              data-family="华文琥珀"
              style="font-family: '华文琥珀'"
            >
              华文琥珀
            </li>
            <li
              data-family="华文楷体"
              style="font-family: '华文楷体'"
            >
              华文楷体
            </li>
            <li
              data-family="华文隶书"
              style="font-family: '华文隶书'"
            >
              华文隶书
            </li>
            <li
              data-family="华文新魏"
              style="font-family: '华文新魏'"
            >
              华文新魏
            </li>
            <li
              data-family="华文行楷"
              style="font-family: '华文行楷'"
            >
              华文行楷
            </li>
            <li
              data-family="华文中宋"
              style="font-family: '华文中宋'"
            >
              华文中宋
            </li>
            <li
              data-family="华文彩云"
              style="font-family: '华文彩云'"
            >
              华文彩云
            </li>
            <li
              data-family="Arial"
              style="font-family: 'Arial'"
            >
              Arial
            </li>
            <li
              data-family="Segoe UI"
              style="font-family: 'Segoe UI'"
            >
              Segoe UI
            </li>
            <li
              data-family="Ink Free"
              style="font-family: 'Ink Free'"
            >
              Ink Free
            </li>
            <li
              data-family="Fantasy"
              style="font-family: 'Fantasy'"
            >
              Fantasy
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__size">
        <span
          class="select"
          title="字体"
        >小四</span>
        <div class="options">
          <ul>
            <li data-size="56">
              初号
            </li>
            <li data-size="48">
              小初
            </li>
            <li data-size="34">
              一号
            </li>
            <li data-size="32">
              小一
            </li>
            <li data-size="29">
              二号
            </li>
            <li data-size="24">
              小二
            </li>
            <li data-size="21">
              三号
            </li>
            <li data-size="20">
              小三
            </li>
            <li data-size="18">
              四号
            </li>
            <li data-size="16">
              小四
            </li>
            <li data-size="14">
              五号
            </li>
            <li data-size="12">
              小五
            </li>
            <li data-size="10">
              六号
            </li>
            <li data-size="8">
              小六
            </li>
            <li data-size="7">
              七号
            </li>
            <li data-size="6">
              八号
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__size-add">
        <i />
      </div>
      <div class="menu-item__size-minus">
        <i />
      </div>
      <div class="menu-item__bold">
        <i />
      </div>
      <div class="menu-item__italic">
        <i />
      </div>
      <div class="menu-item__underline">
        <i />
      </div>
      <div
        class="menu-item__strikeout"
        title="删除线(Ctrl+Shift+X)"
      >
        <i />
      </div>
      <div class="menu-item__superscript">
        <i />
      </div>
      <div class="menu-item__subscript">
        <i />
      </div>
      <div
        class="menu-item__color"
        title="字体颜色"
      >
        <i />
        <span />
        <input
          id="color"
          type="color"
        >
      </div>
      <div
        class="menu-item__highlight"
        title="高亮"
      >
        <i />
        <span />
        <input
          id="highlight"
          type="color"
        >
      </div>
    </div>
    <div class="menu-divider" />
    <div class="menu-item">
      <div class="menu-item__title">
        <i />
        <span
          class="select"
          title="切换标题"
        >正文</span>
        <div class="options">
          <ul>
            <li style="font-size: 16px">
              正文
            </li>
            <li
              data-level="first"
              style="font-size: 26px"
            >
              标题1
            </li>
            <li
              data-level="second"
              style="font-size: 24px"
            >
              标题2
            </li>
            <li
              data-level="third"
              style="font-size: 22px"
            >
              标题3
            </li>
            <li
              data-level="fourth"
              style="font-size: 20px"
            >
              标题4
            </li>
            <li
              data-level="fifth"
              style="font-size: 18px"
            >
              标题5
            </li>
            <li
              data-level="sixth"
              style="font-size: 16px"
            >
              标题6
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__left">
        <i />
      </div>
      <div class="menu-item__center">
        <i />
      </div>
      <div class="menu-item__right">
        <i />
      </div>
      <div class="menu-item__alignment">
        <i />
      </div>
      <div class="menu-item__row-margin">
        <i title="行间距" />
        <div class="options">
          <ul>
            <li data-rowmargin="1">
              1
            </li>
            <li data-rowmargin="1.25">
              1.25
            </li>
            <li data-rowmargin="1.5">
              1.5
            </li>
            <li data-rowmargin="1.75">
              1.75
            </li>
            <li data-rowmargin="2">
              2
            </li>
            <li data-rowmargin="2.5">
              2.5
            </li>
            <li data-rowmargin="3">
              3
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__list">
        <i />
        <div class="options">
          <ul>
            <li>
              <label>取消列表</label>
            </li>
            <li
              data-list-type="ol"
              data-list-style="decimal"
            >
              <label>有序列表：</label>
              <ol>
                <li>________</li>
              </ol>
            </li>
            <li
              data-list-type="ul"
              data-list-style="disc"
            >
              <label>实心圆点列表：</label>
              <ul style="list-style-type: disc">
                <li>________</li>
              </ul>
            </li>
            <li
              data-list-type="ul"
              data-list-style="circle"
            >
              <label>空心圆点列表：</label>
              <ul style="list-style-type: circle">
                <li>________</li>
              </ul>
            </li>
            <li
              data-list-type="ul"
              data-list-style="square"
            >
              <label>空心方块列表：</label>
              <ul style="list-style-type: square">
                <li>________</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="menu-divider" />
    <div class="menu-item">
      <div class="menu-item__table">
        <i title="表格" />
      </div>
      <div class="menu-item__table__collapse">
        <div class="table-close">
          ×
        </div>
        <div class="table-title">
          <span class="table-select">插入</span>
          <span>表格</span>
        </div>
        <div class="table-panel" />
      </div>
      <div class="menu-item__image">
        <i title="图片" />
        <input
          id="image"
          type="file"
          accept=".png, .jpg, .jpeg, .svg, .gif"
        >
      </div>
      <div class="menu-item__hyperlink">
        <i title="超链接" />
      </div>
      <div class="menu-item__separator">
        <i title="分割线" />
        <div class="options">
          <ul>
            <li data-separator="0,0">
              <i />
            </li>
            <li data-separator="1,1">
              <i />
            </li>
            <li data-separator="3,1">
              <i />
            </li>
            <li data-separator="4,4">
              <i />
            </li>
            <li data-separator="7,3,3,3">
              <i />
            </li>
            <li data-separator="6,2,2,2,2,2">
              <i />
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-item__watermark">
        <i title="水印(添加、删除)" />
        <div class="options">
          <ul>
            <li data-menu="add">
              添加水印
            </li>
            <li data-menu="delete">
              删除水印
            </li>
          </ul>
        </div>
      </div>
      <div
        class="menu-item__codeblock"
        title="代码块"
      >
        <i />
      </div>
      <div
        class="menu-item__page-break"
        title="分页符"
      >
        <i />
      </div>
      <div class="menu-item__control">
        <i title="控件" />
        <div class="options">
          <ul>
            <li data-control="text">
              文本
            </li>
            <li data-control="select">
              列举
            </li>
            <li data-control="checkbox">
              复选框
            </li>
          </ul>
        </div>
      </div>
      <div
        class="menu-item__checkbox"
        title="复选框"
      >
        <i />
      </div>
      <div
        class="menu-item__latex"
        title="LateX"
      >
        <i />
      </div>
      <div class="menu-item__date">
        <i title="日期" />
        <div class="options">
          <ul>
            <li data-format="yyyy-MM-dd" />
            <li data-format="yyyy-MM-dd hh:mm:ss" />
          </ul>
        </div>
      </div>
      <div
        class="menu-item__block"
        title="内容块"
      >
        <i />
      </div>
    </div>
    <div class="menu-divider" />
    <div class="menu-item">
      <div
        class="menu-item__search"
        data-menu="search"
      >
        <i />
      </div>
      <div
        class="menu-item__search__collapse"
        data-menu="search"
      >
        <div class="menu-item__search__collapse__search">
          <input type="text">
          <label class="search-result" />
          <div class="arrow-left">
            <i />
          </div>
          <div class="arrow-right">
            <i />
          </div>
          <span>×</span>
        </div>
        <div class="menu-item__search__collapse__replace">
          <input type="text">
          <button>替换</button>
        </div>
      </div>
      <div
        class="menu-item__print"
        data-menu="print"
      >
        <i />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { BlockType, Command, ControlType, EditorMode, ElementType, IBlock, IElement, KeyMap, ListStyle, ListType, PageMode, PaperDirection, RowFlex, TitleLevel } from '@/components/editor'

const props = defineProps({
  isEditing: {
    type: Boolean
  }
})

onMounted(() => {
  const instance = window.__DocEditor
  const isApple = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent)
  // 2. | 撤销 | 重做 | 格式刷 | 清除格式 |
  const undoDom = document.querySelector<HTMLDivElement>('.menu-item__undo')!
  undoDom.title = `撤销(${isApple ? '⌘' : 'Ctrl'}+Z)`
  undoDom.onclick = function () {
    console.log('undo')
    instance.command.executeUndo()
  }

  const redoDom = document.querySelector<HTMLDivElement>('.menu-item__redo')!
  redoDom.title = `重做(${isApple ? '⌘' : 'Ctrl'}+Y)`
  redoDom.onclick = function () {
    console.log('redo')
    instance.command.executeRedo()
  }

  const painterDom = document.querySelector<HTMLDivElement>('.menu-item__painter')!
  painterDom.onclick = function () {
    console.log('painter')
    instance.command.executePainter({
      isDblclick: false
    })
  }
  painterDom.ondblclick = function () {
    console.log('painter')
    instance.command.executePainter({
      isDblclick: true
    })
  }

  document.querySelector<HTMLDivElement>('.menu-item__format')!.onclick = function () {
    console.log('format')
    instance.command.executeFormat()
  }

  // 3. | 字体 | 字体变大 | 字体变小 | 加粗 | 斜体 | 下划线 | 删除线 | 上标 | 下标 | 字体颜色 | 背景色 |
  const fontDom = document.querySelector<HTMLDivElement>('.menu-item__font')!
  const fontSelectDom = fontDom.querySelector<HTMLDivElement>('.select')!
  const fontOptionDom = fontDom.querySelector<HTMLDivElement>('.options')!
  fontDom.onclick = function () {
    console.log('font')
    fontOptionDom.classList.toggle('visible')
  }
  fontOptionDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    instance.command.executeFont(li.dataset.family!)
  }

  const sizeSetDom = document.querySelector<HTMLDivElement>('.menu-item__size')!
  const sizeSelectDom = sizeSetDom.querySelector<HTMLDivElement>('.select')!
  const sizeOptionDom = sizeSetDom.querySelector<HTMLDivElement>('.options')!
  sizeSetDom.title = `设置字号`
  sizeSetDom.onclick = function () {
    console.log('size')
    sizeOptionDom.classList.toggle('visible')
  }
  sizeOptionDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    instance.command.executeSize(Number(li.dataset.size!))
  }

  const sizeAddDom = document.querySelector<HTMLDivElement>('.menu-item__size-add')!
  sizeAddDom.title = `增大字号(${isApple ? '⌘' : 'Ctrl'}+[)`
  sizeAddDom.onclick = function () {
    console.log('size-add')
    instance.command.executeSizeAdd()
  }

  const sizeMinusDom = document.querySelector<HTMLDivElement>('.menu-item__size-minus')!
  sizeMinusDom.title = `减小字号(${isApple ? '⌘' : 'Ctrl'}+])`
  sizeMinusDom.onclick = function () {
    console.log('size-minus')
    instance.command.executeSizeMinus()
  }

  const boldDom = document.querySelector<HTMLDivElement>('.menu-item__bold')!
  boldDom.title = `加粗(${isApple ? '⌘' : 'Ctrl'}+B)`
  boldDom.onclick = function () {
    console.log('bold')
    instance.command.executeBold()
  }

  const italicDom = document.querySelector<HTMLDivElement>('.menu-item__italic')!
  italicDom.title = `斜体(${isApple ? '⌘' : 'Ctrl'}+I)`
  italicDom.onclick = function () {
    console.log('italic')
    instance.command.executeItalic()
  }

  const underlineDom = document.querySelector<HTMLDivElement>('.menu-item__underline')!
  underlineDom.title = `下划线(${isApple ? '⌘' : 'Ctrl'}+U)`
  underlineDom.onclick = function () {
    console.log('underline')
    instance.command.executeUnderline()
  }

  const strikeoutDom = document.querySelector<HTMLDivElement>('.menu-item__strikeout')!
  strikeoutDom.onclick = function () {
    console.log('strikeout')
    instance.command.executeStrikeout()
  }

  const superscriptDom = document.querySelector<HTMLDivElement>('.menu-item__superscript')!
  superscriptDom.title = `上标(${isApple ? '⌘' : 'Ctrl'}+Shift+,)`
  superscriptDom.onclick = function () {
    console.log('superscript')
    instance.command.executeSuperscript()
  }

  const subscriptDom = document.querySelector<HTMLDivElement>('.menu-item__subscript')!
  subscriptDom.title = `下标(${isApple ? '⌘' : 'Ctrl'}+Shift+.)`
  subscriptDom.onclick = function () {
    console.log('subscript')
    instance.command.executeSubscript()
  }

  const colorControlDom = document.querySelector<HTMLInputElement>('#color')!
  colorControlDom.oninput = function () {
    instance.command.executeColor(colorControlDom.value)
  }
  const colorDom = document.querySelector<HTMLDivElement>('.menu-item__color')!
  const colorSpanDom = colorDom.querySelector('span')!
  colorDom.onclick = function () {
    console.log('color')
    colorControlDom.click()
  }

  const highlightControlDom = document.querySelector<HTMLInputElement>('#highlight')!
  highlightControlDom.oninput = function () {
    instance.command.executeHighlight(highlightControlDom.value)
  }
  const highlightDom = document.querySelector<HTMLDivElement>('.menu-item__highlight')!
  const highlightSpanDom = highlightDom.querySelector('span')!
  highlightDom.onclick = function () {
    console.log('highlight')
    highlightControlDom?.click()
  }

  const titleDom = document.querySelector<HTMLDivElement>('.menu-item__title')!
  const titleSelectDom = titleDom.querySelector<HTMLDivElement>('.select')!
  const titleOptionDom = titleDom.querySelector<HTMLDivElement>('.options')!
  titleOptionDom.querySelectorAll('li').forEach((li, index) => {
    li.title = `Ctrl+${isApple ? 'Option' : 'Alt'}+${index}`
  })

  titleDom.onclick = function () {
    console.log('title')
    titleOptionDom.classList.toggle('visible')
  }
  titleOptionDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    const level = <TitleLevel>li.dataset.level
    instance.command.executeTitle(level || null)
  }

  const leftDom = document.querySelector<HTMLDivElement>('.menu-item__left')!
  leftDom.title = `左对齐(${isApple ? '⌘' : 'Ctrl'}+L)`
  leftDom.onclick = function () {
    console.log('left')
    instance.command.executeLeft()
  }

  const centerDom = document.querySelector<HTMLDivElement>('.menu-item__center')!
  centerDom.title = `居中对齐(${isApple ? '⌘' : 'Ctrl'}+E)`
  centerDom.onclick = function () {
    console.log('center')
    instance.command.executeCenter()
  }

  const rightDom = document.querySelector<HTMLDivElement>('.menu-item__right')!
  rightDom.title = `右对齐(${isApple ? '⌘' : 'Ctrl'}+R)`
  rightDom.onclick = function () {
    console.log('right')
    instance.command.executeRight()
  }

  const alignmentDom = document.querySelector<HTMLDivElement>('.menu-item__alignment')!
  alignmentDom.title = `两端对齐(${isApple ? '⌘' : 'Ctrl'}+J)`
  alignmentDom.onclick = function () {
    console.log('alignment')
    instance.command.executeAlignment()
  }

  const rowMarginDom = document.querySelector<HTMLDivElement>('.menu-item__row-margin')!
  const rowOptionDom = rowMarginDom.querySelector<HTMLDivElement>('.options')!
  rowMarginDom.onclick = function () {
    console.log('row-margin')
    rowOptionDom.classList.toggle('visible')
  }
  rowOptionDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    instance.command.executeRowMargin(Number(li.dataset.rowmargin!))
  }

  const listDom = document.querySelector<HTMLDivElement>('.menu-item__list')!
  listDom.title = `列表(${isApple ? '⌘' : 'Ctrl'}+Shift+U)`
  const listOptionDom = listDom.querySelector<HTMLDivElement>('.options')!
  listDom.onclick = function () {
    console.log('list')
    listOptionDom.classList.toggle('visible')
  }
  listOptionDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    const listType = <ListType>li.dataset.listType || null
    const listStyle = <ListStyle><unknown>li.dataset.listStyle
    instance.command.executeList(listType, listStyle)
  }

  // 4. | 表格 | 图片 | 超链接 | 分割线 | 水印 | 代码块 | 分隔符 | 控件 | 复选框 | LaTeX | 日期选择器
  const tableDom = document.querySelector<HTMLDivElement>('.menu-item__table')!
  const tablePanelContainer = document.querySelector<HTMLDivElement>('.menu-item__table__collapse')!
  const tableClose = document.querySelector<HTMLDivElement>('.table-close')!
  const tableTitle = document.querySelector<HTMLDivElement>('.table-select')!
  const tablePanel = document.querySelector<HTMLDivElement>('.table-panel')!
  // 绘制行列
  const tableCellList: HTMLDivElement[][] = []
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr')
    tr.classList.add('table-row')
    const trCellList: HTMLDivElement[] = []
    for (let j = 0; j < 10; j++) {
      const td = document.createElement('td')
      td.classList.add('table-cel')
      tr.append(td)
      trCellList.push(td)
    }
    tablePanel.append(tr)
    tableCellList.push(trCellList)
  }
  let colIndex = 0
  let rowIndex = 0
  // 移除所有格选择
  function removeAllTableCellSelect() {
    tableCellList.forEach(tr => {
      tr.forEach(td => td.classList.remove('active'))
    })
  }
  // 设置标题内容
  function setTableTitle(payload: string) {
    tableTitle.innerText = payload
  }
  // 恢复初始状态
  function recoveryTable() {
    // 还原选择样式、标题、选择行列
    removeAllTableCellSelect()
    setTableTitle('插入')
    colIndex = 0
    rowIndex = 0
    // 隐藏panel
    tablePanelContainer.style.display = 'none'
  }
  tableDom.onclick = function () {
    console.log('table')
    tablePanelContainer!.style.display = 'block'
  }
  tablePanel.onmousemove = function (evt) {
    const celSize = 16
    const rowMarginTop = 10
    const celMarginRight = 6
    const { offsetX, offsetY } = evt
    // 移除所有选择
    removeAllTableCellSelect()
    colIndex = Math.ceil(offsetX / (celSize + celMarginRight)) || 1
    rowIndex = Math.ceil(offsetY / (celSize + rowMarginTop)) || 1
    // 改变选择样式
    tableCellList.forEach((tr, trIndex) => {
      tr.forEach((td, tdIndex) => {
        if (tdIndex < colIndex && trIndex < rowIndex) {
          td.classList.add('active')
        }
      })
    })
    // 改变表格标题
    setTableTitle(`${rowIndex}×${colIndex}`)
  }
  tableClose.onclick = function () {
    recoveryTable()
  }
  tablePanel.onclick = function () {
    // 应用选择
    instance.command.executeInsertTable(rowIndex, colIndex)
    recoveryTable()
  }

  const imageDom = document.querySelector<HTMLDivElement>('.menu-item__image')!
  const imageFileDom = document.querySelector<HTMLInputElement>('#image')!
  imageDom.onclick = function () {
    imageFileDom.click()
  }
  imageFileDom.onchange = function () {
    const file = imageFileDom.files![0]!
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function () {
      // 计算宽高
      const image = new Image()
      const value = fileReader.result as string
      image.src = value
      image.onload = function () {
        instance.command.executeImage({
          value,
          width: image.width,
          height: image.height,
        })
        imageFileDom.value = ''
      }
    }
  }

  const hyperlinkDom = document.querySelector<HTMLDivElement>('.menu-item__hyperlink')!
  hyperlinkDom.onclick = function () {
    console.log('hyperlink')
    alert('hyperlink 待完善')
    // new Dialog({
    //   title: '超链接',
    //   data: [{
    //     type: 'text',
    //     label: '文本',
    //     name: 'name',
    //     required: true,
    //     placeholder: '请输入文本'
    //   }, {
    //     type: 'text',
    //     label: '链接',
    //     name: 'url',
    //     required: true,
    //     placeholder: '请输入链接'
    //   }],
    //   onConfirm: (payload) => {
    //     const name = payload.find(p => p.name === 'name')?.value
    //     if (!name) return
    //     const url = payload.find(p => p.name === 'url')?.value
    //     if (!url) return
    //     instance.command.executeHyperlink({
    //       type: ElementType.HYPERLINK,
    //       value: '',
    //       url,
    //       valueList: name.split('').map(n => ({
    //         value: n,
    //         size: 16
    //       }))
    //     })
    //   }
    // })
  }

  const separatorDom = document.querySelector<HTMLDivElement>('.menu-item__separator')!
  const separatorOptionDom = separatorDom.querySelector<HTMLDivElement>('.options')!
  separatorDom.onclick = function () {
    console.log('separator')
    separatorOptionDom.classList.toggle('visible')
  }
  separatorOptionDom.onmousedown = function (evt) {
    let payload: number[] = []
    const li = evt.target as HTMLLIElement
    const separatorDash = li.dataset.separator?.split(',').map(Number)
    if (separatorDash) {
      const isSingleLine = separatorDash.every(d => d === 0)
      if (!isSingleLine) {
        payload = separatorDash
      }
    }
    instance.command.executeSeparator(payload)
  }

  const pageBreakDom = document.querySelector<HTMLDivElement>('.menu-item__page-break')!
  pageBreakDom.onclick = function () {
    console.log('pageBreak')
    instance.command.executePageBreak()
  }

  const watermarkDom = document.querySelector<HTMLDivElement>('.menu-item__watermark')!
  const watermarkOptionDom = watermarkDom.querySelector<HTMLDivElement>('.options')!
  watermarkDom.onclick = function () {
    console.log('watermark')
    watermarkOptionDom.classList.toggle('visible')
  }
  watermarkOptionDom.onmousedown = function (evt) {
    const li = evt.target as HTMLLIElement
    const menu = li.dataset.menu!
    watermarkOptionDom.classList.toggle('visible')
    if (menu === 'add') {
      alert('watermarkOptionDom 待完善')
      // new Dialog({
      //   title: '水印',
      //   data: [{
      //     type: 'text',
      //     label: '内容',
      //     name: 'data',
      //     required: true,
      //     placeholder: '请输入内容'
      //   }, {
      //     type: 'color',
      //     label: '颜色',
      //     name: 'color',
      //     required: true,
      //     value: '#AEB5C0'
      //   }, {
      //     type: 'number',
      //     label: '字体大小',
      //     name: 'size',
      //     required: true,
      //     value: '120'
      //   }],
      //   onConfirm: (payload) => {
      //     const nullableIndex = payload.findIndex(p => !p.value)
      //     if (~nullableIndex) return
      //     const watermark = payload.reduce((pre, cur) => {
      //       pre[cur.name] = cur.value
      //       return pre
      //     }, <any>{})
      //     instance.command.executeAddWatermark({
      //       data: watermark.data,
      //       color: watermark.color,
      //       size: Number(watermark.size)
      //     })
      //   }
      // })
    } else {
      instance.command.executeDeleteWatermark()
    }
  }

  const codeblockDom = document.querySelector<HTMLDivElement>('.menu-item__codeblock')!
  codeblockDom.onclick = function () {
    console.log('codeblock')
    alert('codeblockDom 待完善')
    // new Dialog({
    //   title: '代码块',
    //   data: [{
    //     type: 'textarea',
    //     name: 'codeblock',
    //     placeholder: '请输入代码',
    //     width: 500,
    //     height: 300
    //   }],
    //   onConfirm: (payload) => {
    //     const codeblock = payload.find(p => p.name === 'codeblock')?.value
    //     if (!codeblock) return
    //     const tokenList = prism.tokenize(codeblock, prism.languages.javascript)
    //     const formatTokenList = formatPrismToken(tokenList)
    //     const elementList: IElement[] = []
    //     for (let i = 0; i < formatTokenList.length; i++) {
    //       const formatToken = formatTokenList[i]
    //       const tokenStringList = formatToken.content.split('')
    //       for (let j = 0; j < tokenStringList.length; j++) {
    //         const value = tokenStringList[j]
    //         const element: IElement = {
    //           value
    //         }
    //         if (formatToken.color) {
    //           element.color = formatToken.color
    //         }
    //         if (formatToken.bold) {
    //           element.bold = true
    //         }
    //         if (formatToken.italic) {
    //           element.italic = true
    //         }
    //         elementList.push(element)
    //       }
    //     }
    //     elementList.unshift({
    //       value: '\n'
    //     })
    //     instance.command.executeInsertElementList(elementList)
    //   }
    // })
  }

  const controlDom = document.querySelector<HTMLDivElement>('.menu-item__control')!
  const controlOptionDom = controlDom.querySelector<HTMLDivElement>('.options')!
  controlDom.onclick = function () {
    console.log('control')
    controlOptionDom.classList.toggle('visible')
  }
  controlOptionDom.onmousedown = function (evt) {
    controlOptionDom.classList.toggle('visible')
    const li = evt.target as HTMLLIElement
    const type = <ControlType>li.dataset.control
    switch (type) {
      case ControlType.TEXT:
        alert('文本控件 待完善')
        // new Dialog({
        //   title: '文本控件',
        //   data: [{
        //     type: 'text',
        //     label: '占位符',
        //     name: 'placeholder',
        //     required: true,
        //     placeholder: '请输入占位符'
        //   }, {
        //     type: 'text',
        //     label: '默认值',
        //     name: 'value',
        //     placeholder: '请输入默认值'
        //   }],
        //   onConfirm: (payload) => {
        //     const placeholder = payload.find(p => p.name === 'placeholder')?.value
        //     if (!placeholder) return
        //     const value = payload.find(p => p.name === 'value')?.value || ''
        //     instance.command.executeInsertElementList([{
        //       type: ElementType.CONTROL,
        //       value: '',
        //       control: {
        //         type,
        //         value: value
        //           ? [{
        //             value
        //           }]
        //           : null,
        //         placeholder
        //       }
        //     }])
        //   }
        // })
        break
      case ControlType.SELECT:
        alert('列举控件 待完善')
        // new Dialog({
        //   title: '列举控件',
        //   data: [{
        //     type: 'text',
        //     label: '占位符',
        //     name: 'placeholder',
        //     required: true,
        //     placeholder: '请输入占位符'
        //   }, {
        //     type: 'text',
        //     label: '默认值',
        //     name: 'code',
        //     placeholder: '请输入默认值'
        //   }, {
        //     type: 'textarea',
        //     label: '值集',
        //     name: 'valueSets',
        //     required: true,
        //     height: 100,
        //     placeholder: `请输入值集JSON，例：\n[{\n"value":"有",\n"code":"98175"\n}]`
        //   }],
        //   onConfirm: (payload) => {
        //     const placeholder = payload.find(p => p.name === 'placeholder')?.value
        //     if (!placeholder) return
        //     const valueSets = payload.find(p => p.name === 'valueSets')?.value
        //     if (!valueSets) return
        //     const code = payload.find(p => p.name === 'code')?.value
        //     instance.command.executeInsertElementList([{
        //       type: ElementType.CONTROL,
        //       value: '',
        //       control: {
        //         type,
        //         code,
        //         value: null,
        //         placeholder,
        //         valueSets: JSON.parse(valueSets)
        //       }
        //     }])
        //   }
        // })
        break
      case ControlType.CHECKBOX:
        alert('复选框控件 待完善')
        // new Dialog({
        //   title: '复选框控件',
        //   data: [{
        //     type: 'text',
        //     label: '默认值',
        //     name: 'code',
        //     placeholder: '请输入默认值，多个值以英文逗号分割'
        //   }, {
        //     type: 'textarea',
        //     label: '值集',
        //     name: 'valueSets',
        //     required: true,
        //     height: 100,
        //     placeholder: `请输入值集JSON，例：\n[{\n"value":"有",\n"code":"98175"\n}]`
        //   }],
        //   onConfirm: (payload) => {
        //     const valueSets = payload.find(p => p.name === 'valueSets')?.value
        //     if (!valueSets) return
        //     const code = payload.find(p => p.name === 'code')?.value
        //     instance.command.executeInsertElementList([{
        //       type: ElementType.CONTROL,
        //       value: '',
        //       control: {
        //         type,
        //         code,
        //         value: null,
        //         valueSets: JSON.parse(valueSets)
        //       }
        //     }])
        //   }
        // })
        break
      default:
        break
    }
  }

  const checkboxDom = document.querySelector<HTMLDivElement>('.menu-item__checkbox')!
  checkboxDom.onclick = function () {
    console.log('checkbox')
    instance.command.executeInsertElementList([{
      type: ElementType.CHECKBOX,
      value: ''
    }])
  }

  const latexDom = document.querySelector<HTMLDivElement>('.menu-item__latex')!
  latexDom.onclick = function () {
    console.log('LaTeX')
    alert('LaTeX 待完善')
    // new Dialog({
    //   title: 'LaTeX',
    //   data: [{
    //     type: 'textarea',
    //     height: 100,
    //     name: 'value',
    //     placeholder: '请输入LaTeX文本'
    //   }],
    //   onConfirm: (payload) => {
    //     const value = payload.find(p => p.name === 'value')?.value
    //     if (!value) return
    //     instance.command.executeInsertElementList([{
    //       type: ElementType.LATEX,
    //       value
    //     }])
    //   }
    // })
  }

  const dateDom = document.querySelector<HTMLDivElement>('.menu-item__date')!
  const dateDomOptionDom = dateDom.querySelector<HTMLDivElement>('.options')!
  dateDom.onclick = function () {
    console.log('date')
    dateDomOptionDom.classList.toggle('visible')
    // 定位调整
    const bodyRect = document.body.getBoundingClientRect()
    const dateDomOptionRect = dateDomOptionDom.getBoundingClientRect()
    if (dateDomOptionRect.left + dateDomOptionRect.width > bodyRect.width) {
      dateDomOptionDom.style.right = '0px'
      dateDomOptionDom.style.left = 'unset'
    } else {
      dateDomOptionDom.style.right = 'unset'
      dateDomOptionDom.style.left = '0px'
    }
    // 当前日期
    const date = new Date()
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    const second = date.getSeconds().toString().padStart(2, '0')
    const dateString = `${year}-${month}-${day}`
    const dateTimeString = `${dateString} ${hour}:${minute}:${second}`
    dateDomOptionDom.querySelector<HTMLLIElement>('li:first-child')!.innerText = dateString
    dateDomOptionDom.querySelector<HTMLLIElement>('li:last-child')!.innerText = dateTimeString
  }
  dateDomOptionDom.onmousedown = function (evt) {
    const li = evt.target as HTMLLIElement
    const dateFormat = li.dataset.format!
    dateDomOptionDom.classList.toggle('visible')
    instance.command.executeInsertElementList([{
      type: ElementType.DATE,
      value: '',
      dateFormat,
      valueList: [{
        value: li.innerText.trim(),
      }]
    }])
  }

  const blockDom = document.querySelector<HTMLDivElement>('.menu-item__block')!
  blockDom.onclick = function () {
    console.log('block')
    new Dialog({
      title: '内容块',
      data: [{
        type: 'select',
        label: '类型',
        name: 'type',
        value: 'iframe',
        required: true,
        options: [{
          label: '网址',
          value: 'iframe'
        }, {
          label: '视频',
          value: 'video'
        }]
      }, {
        type: 'number',
        label: '宽度',
        name: 'width',
        placeholder: '请输入宽度（默认页面内宽度）'
      }, {
        type: 'number',
        label: '高度',
        name: 'height',
        required: true,
        placeholder: '请输入高度'
      }, {
        type: 'textarea',
        label: '地址',
        height: 100,
        name: 'value',
        required: true,
        placeholder: '请输入地址'
      }],
      onConfirm: (payload) => {
        const type = payload.find(p => p.name === 'type')?.value
        if (!type) return
        const value = payload.find(p => p.name === 'value')?.value
        if (!value) return
        const width = payload.find(p => p.name === 'width')?.value
        const height = payload.find(p => p.name === 'height')?.value
        if (!height) return
        const block: IBlock = {
          type: <BlockType>type
        }
        if (block.type === BlockType.IFRAME) {
          block.iframeBlock = {
            src: value
          }
        } else if (block.type === BlockType.VIDEO) {
          block.videoBlock = {
            src: value
          }
        }
        const blockElement: IElement = {
          type: ElementType.BLOCK,
          value: '',
          height: Number(height),
          block
        }
        if (width) {
          blockElement.width = Number(width)
        }
        instance.command.executeInsertElementList([blockElement])
      }
    })
  }

  // 5. | 搜索&替换 | 打印 |
  const searchCollapseDom = document.querySelector<HTMLDivElement>('.menu-item__search__collapse')!
  const searchInputDom = document.querySelector<HTMLInputElement>('.menu-item__search__collapse__search input')!
  const replaceInputDom = document.querySelector<HTMLInputElement>('.menu-item__search__collapse__replace input')!
  const searchDom = document.querySelector<HTMLDivElement>('.menu-item__search')!
  searchDom.title = `搜索与替换(${isApple ? '⌘' : 'Ctrl'}+F)`
  const searchResultDom = searchCollapseDom.querySelector<HTMLLabelElement>('.search-result')!
  function setSearchResult() {
    const result = instance.command.getSearchNavigateInfo()
    if (result) {
      const { index, count } = result
      searchResultDom.innerText = `${index}/${count}`
    } else {
      searchResultDom.innerText = ''
    }
  }
  searchDom.onclick = function () {
    console.log('search')
    searchCollapseDom.style.display = 'block'
    const bodyRect = document.body.getBoundingClientRect()
    const searchRect = searchDom.getBoundingClientRect()
    const searchCollapseRect = searchCollapseDom.getBoundingClientRect()
    if (searchRect.left + searchCollapseRect.width > bodyRect.width) {
      searchCollapseDom.style.right = '0px'
      searchCollapseDom.style.left = 'unset'
    } else {
      searchCollapseDom.style.right = 'unset'
    }
    searchInputDom.focus()
  }
  searchCollapseDom.querySelector<HTMLSpanElement>('span')!.onclick = function () {
    searchCollapseDom.style.display = 'none'
    searchInputDom.value = ''
    replaceInputDom.value = ''
    instance.command.executeSearch(null)
    setSearchResult()
  }
  searchInputDom.oninput = function () {
    instance.command.executeSearch(searchInputDom.value || null)
    setSearchResult()
  }
  searchInputDom.onkeydown = function (evt) {
    if (evt.key === 'Enter') {
      instance.command.executeSearch(searchInputDom.value || null)
      setSearchResult()
    }
  }
  searchCollapseDom.querySelector<HTMLButtonElement>('button')!.onclick = function () {
    const searchValue = searchInputDom.value
    const replaceValue = replaceInputDom.value
    if (searchValue && replaceValue && searchValue !== replaceValue) {
      instance.command.executeReplace(replaceValue)
    }
  }
  searchCollapseDom.querySelector<HTMLDivElement>('.arrow-left')!.onclick = function () {
    instance.command.executeSearchNavigatePre()
    setSearchResult()
  }
  searchCollapseDom.querySelector<HTMLDivElement>('.arrow-right')!.onclick = function () {
    instance.command.executeSearchNavigateNext()
    setSearchResult()
  }

  const printDom = document.querySelector<HTMLDivElement>('.menu-item__print')!
  printDom.title = `打印(${isApple ? '⌘' : 'Ctrl'}+P)`
  printDom.onclick = function () {
    console.log('print')
    instance.command.executePrint()
  }
  // 8. 内部事件监听
  instance.listener.rangeStyleChange = function (payload) {
    // 控件类型
    payload.type === ElementType.SUBSCRIPT ? subscriptDom.classList.add('active') : subscriptDom.classList.remove('active')
    payload.type === ElementType.SUPERSCRIPT ? superscriptDom.classList.add('active') : superscriptDom.classList.remove('active')
    payload.type === ElementType.SEPARATOR ? separatorDom.classList.add('active') : separatorDom.classList.remove('active')
    separatorOptionDom.querySelectorAll('li').forEach(li => li.classList.remove('active'))
    if (payload.type === ElementType.SEPARATOR) {
      const separator = payload.dashArray.join(',') || '0,0'
      const curSeparatorDom = separatorOptionDom.querySelector<HTMLLIElement>(`[data-separator='${separator}']`)!
      if (curSeparatorDom) {
        curSeparatorDom.classList.add('active')
      }
    }

    // 富文本
    fontOptionDom.querySelectorAll<HTMLLIElement>('li').forEach(li => li.classList.remove('active'))
    const curFontDom = fontOptionDom.querySelector<HTMLLIElement>(`[data-family='${payload.font}']`)
    if (curFontDom) {
      fontSelectDom.innerText = curFontDom.innerText
      fontSelectDom.style.fontFamily = payload.font
      curFontDom.classList.add('active')
    }
    sizeOptionDom.querySelectorAll<HTMLLIElement>('li').forEach(li => li.classList.remove('active'))
    const curSizeDom = sizeOptionDom.querySelector<HTMLLIElement>(`[data-size='${payload.size}']`)
    if (curSizeDom) {
      sizeSelectDom.innerText = curSizeDom.innerText
      curSizeDom.classList.add('active')
    } else {
      sizeSelectDom.innerText = `${payload.size}`
    }
    payload.bold ? boldDom.classList.add('active') : boldDom.classList.remove('active')
    payload.italic ? italicDom.classList.add('active') : italicDom.classList.remove('active')
    payload.underline ? underlineDom.classList.add('active') : underlineDom.classList.remove('active')
    payload.strikeout ? strikeoutDom.classList.add('active') : strikeoutDom.classList.remove('active')
    if (payload.color) {
      colorDom.classList.add('active')
      colorControlDom.value = payload.color
      colorSpanDom.style.backgroundColor = payload.color
    } else {
      colorDom.classList.remove('active')
      colorControlDom.value = '#000000'
      colorSpanDom.style.backgroundColor = '#000000'
    }
    if (payload.highlight) {
      highlightDom.classList.add('active')
      highlightControlDom.value = payload.highlight
      highlightSpanDom.style.backgroundColor = payload.highlight
    } else {
      highlightDom.classList.remove('active')
      highlightControlDom.value = '#ffff00'
      highlightSpanDom.style.backgroundColor = '#ffff00'
    }

    // 行布局
    leftDom.classList.remove('active')
    centerDom.classList.remove('active')
    rightDom.classList.remove('active')
    alignmentDom.classList.remove('active')
    if (payload.rowFlex && payload.rowFlex === 'right') {
      rightDom.classList.add('active')
    } else if (payload.rowFlex && payload.rowFlex === 'center') {
      centerDom.classList.add('active')
    } else if (payload.rowFlex && payload.rowFlex === 'alignment') {
      alignmentDom.classList.add('active')
    } else {
      leftDom.classList.add('active')
    }

    // 行间距
    rowOptionDom.querySelectorAll<HTMLLIElement>('li').forEach(li => li.classList.remove('active'))
    const curRowMarginDom = rowOptionDom.querySelector<HTMLLIElement>(`[data-rowmargin='${payload.rowMargin}']`)!
    curRowMarginDom.classList.add('active')

    // 功能
    payload.undo ? undoDom.classList.remove('no-allow') : undoDom.classList.add('no-allow')
    payload.redo ? redoDom.classList.remove('no-allow') : redoDom.classList.add('no-allow')
    payload.painter ? painterDom.classList.add('active') : painterDom.classList.remove('active')

    // 标题
    titleOptionDom.querySelectorAll<HTMLLIElement>('li').forEach(li => li.classList.remove('active'))
    if (payload.level) {
      const curTitleDom = titleOptionDom.querySelector<HTMLLIElement>(`[data-level='${payload.level}']`)!
      titleSelectDom.innerText = curTitleDom.innerText
      curTitleDom.classList.add('active')
    } else {
      titleSelectDom.innerText = '正文'
      titleOptionDom.querySelector('li:first-child')!.classList.add('active')
    }

    // 列表
    listOptionDom.querySelectorAll<HTMLLIElement>('li').forEach(li => li.classList.remove('active'))
    if (payload.listType) {
      listDom.classList.add('active')
      const listType = payload.listType
      const listStyle = payload.listType === ListType.OL ? ListStyle.DECIMAL : payload.listType
      const curListDom = listOptionDom
        .querySelector<HTMLLIElement>(`[data-list-type='${listType}'][data-list-style='${listStyle}']`)
      if (curListDom) {
        curListDom.classList.add('active')
      }
    } else {
      listDom.classList.remove('active')
    }
  }
  instance.listener.controlChange = function (payload) {
    const disableMenusInControlContext = [
      'superscript',
      'subscript',
      'table',
      'image',
      'hyperlink',
      'separator',
      'codeblock',
      'page-break',
      'control',
      'checkbox'
    ]
    // 菜单操作权限
    disableMenusInControlContext.forEach(menu => {
      const menuDom = document.querySelector<HTMLDivElement>(`.menu-item__${menu}`)!
      payload ? menuDom.classList.add('disable') : menuDom.classList.remove('disable')
    })
  }
  // 9. 右键菜单注册
  instance.register.contextMenuList([
    {
      name: '签名',
      icon: 'signature',
      when: (payload) => {
        return !payload.isReadonly && payload.editorTextFocus
      },
      callback: (command: Command) => {
        new Signature({
          onConfirm(payload) {
            if (!payload) return
            const { value, width, height } = payload
            if (!value || !width || !height) return
            command.executeInsertElementList([{
              value,
              width,
              height,
              type: ElementType.IMAGE
            }])
          }
        })
      }
    }
  ])

  // 10. 快捷键注册
  instance.register.shortcutList([
    {
      key: KeyMap.P,
      mod: true,
      isGlobal: true,
      callback: (command: Command) => {
        command.executePrint()
      }
    },
    {
      key: KeyMap.F,
      mod: true,
      isGlobal: true,
      callback: (command: Command) => {
        const text = command.getRangeText()
        searchDom.click()
        if (text) {
          searchInputDom.value = text
          instance.command.executeSearch(text)
          setSearchResult()
        }
      }
    },
    {
      key: KeyMap.MINUS,
      ctrl: true,
      isGlobal: true,
      callback: (command: Command) => {
        command.executePageScaleMinus()
      }
    },
    {
      key: KeyMap.EQUAL,
      ctrl: true,
      isGlobal: true,
      callback: (command: Command) => {
        command.executePageScaleAdd()
      }
    },
    {
      key: KeyMap.ZERO,
      ctrl: true,
      isGlobal: true,
      callback: (command: Command) => {
        command.executePageScaleRecovery()
      }
    }
  ])
})
</script>
<style lang="scss">
.menu {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f4f7;
  box-shadow: 0 2px 4px 0 transparent;
}

.menu-divider {
  width: 1px;
  height: 16px;
  margin: 0 8px;
  display: inline-block;
  background-color: #cfd2d8;
}

.menu-item {
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
}

.menu-item > div {
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
}

.menu-item > div:hover {
  background: rgba(25, 55, 88, 0.04);
}

.menu-item > div.active {
  background: rgba(25, 55, 88, 0.08);
}

.menu-item i {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.menu-item > div > span {
  width: 16px;
  height: 3px;
  display: inline-block;
  border: 1px solid #e2e6ed;
}

.menu-item .select {
  border: none;
  font-size: 12px;
  line-height: 24px;
  user-select: none;
}

.menu-item .select::after {
  position: absolute;
  content: '';
  top: 11px;
  width: 0;
  height: 0;
  right: 2px;
  border-color: #767c85 transparent transparent;
  border-style: solid solid none;
  border-width: 3px 3px 0;
}

.menu-item .options {
  box-sizing: content-box;
  width: 70px;
  position: absolute;
  left: 0;
  top: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: none;
}

.menu-item .options.visible {
  display: block;
}

.menu-item .options li {
  padding: 5px;
  margin: 5px 0;
  user-select: none;
  transition: all 0.3s;
}

.menu-item .options li:hover {
  background-color: #ebecef;
}

.menu-item .options li.active {
  background-color: #e2e6ed;
}

.menu-item .menu-item__font {
  width: 65px;
  position: relative;
}

.menu-item .menu-item__size {
  width: 50px;
  text-align: center;
  position: relative;
}

.menu-item__font .select,
.menu-item__size .select {
  width: 100%;
  height: 100%;
}

.menu-item__undo.no-allow,
.menu-item__redo.no-allow,
.menu-item > div.disable {
  color: #c0c4cc;
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: none;
}

.menu-item__undo i {
  background-image: url('~@/assets/editor/undo.svg');
}

.menu-item__redo i {
  background-image: url('~@/assets/editor/redo.svg');
}

.menu-item__painter i {
  background-image: url('~@/assets/editor/painter.svg');
}

.menu-item__format i {
  background-image: url('~@/assets/editor/format.svg');
}

.menu-item__size-add i {
  background-image: url('~@/assets/editor/size-add.svg');
}

.menu-item__size-minus i {
  background-image: url('~@/assets/editor/size-minus.svg');
}

.menu-item__bold i {
  background-image: url('~@/assets/editor/bold.svg');
}

.menu-item__italic i {
  background-image: url('~@/assets/editor/italic.svg');
}

.menu-item__underline i {
  background-image: url('~@/assets/editor/underline.svg');
}

.menu-item__strikeout i {
  background-image: url('~@/assets/editor/strikeout.svg');
}

.menu-item__superscript i {
  background-image: url('~@/assets/editor/superscript.svg');
}

.menu-item__subscript i {
  background-image: url('~@/assets/editor/subscript.svg');
}

.menu-item__color,
.menu-item__highlight {
  display: flex;
  flex-direction: column;
}

.menu-item__color #color,
.menu-item__highlight #highlight {
  width: 1px;
  height: 1px;
  visibility: hidden;
  outline: none;
  appearance: none;
}

.menu-item__color i {
  background-image: url('~@/assets/editor/color.svg');
}

.menu-item__color span {
  background-color: #000000;
}

.menu-item__highlight i {
  background-image: url('~@/assets/editor/highlight.svg');
}

.menu-item__highlight span {
  background-color: #ffff00;
}

.menu-item .menu-item__title {
  width: 60px;
  position: relative;
}

.menu-item__title .select {
  width: calc(100% - 20px);
  height: 100%;
}

.menu-item__title i {
  transform: translateX(-5px);
  background-image: url('~@/assets/editor/title.svg');
}

.menu-item__title .options {
  width: 80px;
}

.menu-item__left i {
  background-image: url('~@/assets/editor/left.svg');
}

.menu-item__center i {
  background-image: url('~@/assets/editor/center.svg');
}

.menu-item__right i {
  background-image: url('~@/assets/editor/right.svg');
}

.menu-item__alignment i {
  background-image: url('~@/assets/editor/alignment.svg');
}

.menu-item__row-margin {
  position: relative;
}

.menu-item__row-margin i {
  background-image: url('~@/assets/editor/row-margin.svg');
}

.menu-item__list {
  position: relative;
}

.menu-item__list i {
  background-image: url('~@/assets/editor/list.svg');
}

.menu-item__list .options {
  width: 110px;
}

.menu-item__list .options > ul > li * {
  pointer-events: none;
}

.menu-item__list .options > ul > li li {
  margin-left: 18px;
}

.menu-item__image i {
  background-image: url('~@/assets/editor/image.svg');
}

.menu-item__image input {
  display: none;
}

.menu-item__table {
  position: relative;
}

.menu-item__table i {
  background-image: url('~@/assets/editor/table.svg');
}

.menu-item .menu-item__table__collapse {
  width: 270px;
  height: 310px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  box-sizing: border-box;
  border-radius: 2px;
  position: absolute;
  display: none;
  z-index: 99;
  top: 25px;
  left: 0;
  padding: 14px 27px;
  cursor: auto;
}

.menu-item .menu-item__table__collapse .table-close {
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
}

.menu-item .menu-item__table__collapse .table-close:hover {
  color: #7d7e80;
}

.menu-item .menu-item__table__collapse:hover {
  background: #fff;
}

.menu-item .menu-item__table__collapse .table-title {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 5px;
  border-bottom: 1px solid #e2e6ed;
}

.table-title span {
  font-size: 12px;
  color: #3d4757;
  display: inline;
  margin: 0;
}

.table-panel {
  cursor: pointer;
}

.table-panel .table-row {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  pointer-events: none;
}

.table-panel .table-cel {
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid #e2e6ed;
  background: #fff;
  position: relative;
  margin-right: 6px;
  pointer-events: none;
}

.table-panel .table-cel.active {
  border: 1px solid rgba(73, 145, 242, 0.2);
  background: rgba(73, 145, 242, 0.15);
}

.table-panel .table-row .table-cel:last-child {
  margin-right: 0;
}

.menu-item__hyperlink i {
  background-image: url('~@/assets/editor/hyperlink.svg');
}

.menu-item__separator {
  position: relative;
}

.menu-item__separator > i {
  background-image: url('~@/assets/editor/separator.svg');
}

.menu-item .menu-item__separator .options {
  width: 128px;
}

.menu-item .menu-item__separator li {
  padding: 1px 5px;
}

.menu-item__separator li i {
  pointer-events: none;
}

.menu-item__separator li[data-separator='0,0'] {
  background-image: url('~@/assets/editor/line-single.svg');
}

.menu-item__separator li[data-separator='1,1'] {
  background-image: url('~@/assets/editor/line-dot.svg');
}

.menu-item__separator li[data-separator='3,1'] {
  background-image: url('~@/assets/editor/line-dash-small-gap.svg');
}

.menu-item__separator li[data-separator='4,4'] {
  background-image: url('~@/assets/editor/line-dash-large-gap.svg');
}

.menu-item__separator li[data-separator='7,3,3,3'] {
  background-image: url('~@/assets/editor/line-dash-dot.svg');
}

.menu-item__separator li[data-separator='6,2,2,2,2,2'] {
  background-image: url('~@/assets/editor/line-dash-dot-dot.svg');
}

.menu-item__watermark > i {
  background-image: url('~@/assets/editor/watermark.svg');
}

.menu-item__watermark {
  position: relative;
}

.menu-item__codeblock i {
  background-image: url('~@/assets/editor/codeblock.svg');
}

.menu-item__page-break i {
  background-image: url('~@/assets/editor/page-break.svg');
}

.menu-item__control {
  position: relative;
}

.menu-item__control i {
  background-image: url('~@/assets/editor/control.svg');
}

.menu-item__checkbox i {
  background-image: url('~@/assets/editor/checkbox.svg');
}

.menu-item__latex i {
  background-image: url('~@/assets/editor/latex.svg');
}

.menu-item__date {
  position: relative;
}

.menu-item__date i {
  background-image: url('~@/assets/editor/date.svg');
}

.menu-item__date .options {
  width: 160px;
}

.menu-item__block i {
  background-image: url('~@/assets/editor/block.svg');
}

.menu-item .menu-item__control .options {
  width: 55px;
}

.menu-item__search {
  position: relative;
}

.menu-item__search i {
  background-image: url('~@/assets/editor/search.svg');
}

.menu-item .menu-item__search__collapse {
  width: 260px;
  height: 72px;
  box-sizing: border-box;
  position: absolute;
  display: none;
  z-index: 99;
  top: 25px;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 5px 5px #e3dfdf;
}

.menu-item .menu-item__search__collapse:hover {
  background: #ffffff;
}

.menu-item .menu-item__search__collapse > div {
  width: 250px;
  height: 36px;
  padding: 0 5px;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
}

.menu-item .menu-item__search__collapse > div input {
  width: 205px;
  height: 27px;
  appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  line-height: 27px;
  outline: none;
  padding: 0 5px;
}

.menu-item .menu-item__search__collapse > div span {
  height: 100%;
  color: #dcdfe6;
  font-size: 25px;
  display: inline-block;
  border: 0;
  padding: 0 10px;
}

.menu-item .menu-item__search__collapse__replace button {
  display: inline-block;
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  background: #fff;
  line-height: 22px;
  padding: 0 6px;
  white-space: nowrap;
  margin-left: 4px;
  cursor: pointer;
  font-size: 12px;
}

.menu-item .menu-item__search__collapse__replace button:hover {
  background: rgba(25, 55, 88, 0.04);
}

.menu-item .menu-item__search__collapse__search {
  position: relative;
}

.menu-item .menu-item__search__collapse__search label {
  right: 110px;
  font-size: 12px;
  color: #3d4757;
  position: absolute;
}

.menu-item .menu-item__search__collapse__search > input {
  padding: 5px 90px 5px 5px !important;
}

.menu-item .menu-item__search__collapse__search > div {
  width: 28px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-left: 1px solid #e2e6ed;
  transition: all 0.5s;
}

.menu-item .menu-item__search__collapse__search > div:hover {
  background-color: rgba(25, 55, 88, 0.04);
}

.menu-item .menu-item__search__collapse__search i {
  width: 6px;
  height: 8px;
  transform: translateY(1px);
}

.menu-item .menu-item__search__collapse__search .arrow-left {
  right: 76px;
}

.menu-item .menu-item__search__collapse__search .arrow-left i {
  background: url('~@/assets/editor/arrow-left.svg') no-repeat;
}

.menu-item .menu-item__search__collapse__search .arrow-right {
  right: 48px;
}

.menu-item .menu-item__search__collapse__search .arrow-right i {
  background: url('~@/assets/editor/arrow-right.svg') no-repeat;
}

.menu-item__print i {
  background-image: url('~@/assets/editor/print.svg');
}
</style>
