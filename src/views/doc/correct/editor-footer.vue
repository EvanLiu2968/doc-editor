<template>
  <div
    class="footer"
    editor-component="footer"
  >
    <div>
      <div class="page-mode">
        <i title="页面模式(分页、连页)" />
        <div class="options">
          <ul>
            <li
              data-page-mode="paging"
              class="active"
            >
              分页
            </li>
            <li data-page-mode="continuity">
              连页
            </li>
          </ul>
        </div>
      </div>
      <span>可见页码：<span class="page-no-list">1</span></span>
      <span>页面：<span class="page-no">1</span>/<span class="page-size">1</span></span>
      <span>字数：<span class="word-count">0</span></span>
    </div>
    <div
      class="editor-mode"
      title="编辑模式(编辑、只读)"
    >
      {{ props.isEditing ? '编辑模式' : '只读模式' }}
    </div>
    <div>
      <div
        class="page-scale-minus"
        title="缩小(Ctrl+-)"
      >
        <i />
      </div>
      <span
        class="page-scale-percentage"
        title="显示比例(点击可复原Ctrl+0)"
      >100%</span>
      <div
        class="page-scale-add"
        title="放大(Ctrl+=)"
      >
        <i />
      </div>
      <div class="paper-size">
        <i title="纸张类型" />
        <div class="options">
          <ul>
            <li
              data-paper-size="794*1123"
              class="active"
            >
              A4
            </li>
            <li data-paper-size="1593*2251">
              A2
            </li>
            <li data-paper-size="1125*1593">
              A3
            </li>
            <li data-paper-size="565*796">
              A5
            </li>
            <li data-paper-size="412*488">
              5号信封
            </li>
            <li data-paper-size="450*866">
              6号信封
            </li>
            <li data-paper-size="609*862">
              7号信封
            </li>
            <li data-paper-size="862*1221">
              9号信封
            </li>
            <li data-paper-size="813*1266">
              法律用纸
            </li>
            <li data-paper-size="813*1054">
              信纸
            </li>
          </ul>
        </div>
      </div>
      <div class="paper-direction">
        <i title="纸张方向" />
        <div class="options">
          <ul>
            <li
              data-paper-direction="vertical"
              class="active"
            >
              纵向
            </li>
            <li data-paper-direction="horizontal">
              横向
            </li>
          </ul>
        </div>
      </div>
      <div
        class="paper-margin"
        title="页边距"
      >
        <i />
      </div>
      <div
        class="fullscreen"
        title="全屏显示"
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
  // 6. 页面模式 | 纸张缩放 | 纸张大小 | 纸张方向 | 页边距 | 全屏
  const pageModeDom = document.querySelector<HTMLDivElement>('.page-mode')!
  const pageModeOptionsDom = pageModeDom.querySelector<HTMLDivElement>('.options')!
  pageModeDom.onclick = function () {
    pageModeOptionsDom.classList.toggle('visible')
  }
  pageModeOptionsDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    instance.command.executePageMode(<PageMode>li.dataset.pageMode!)
  }

  document.querySelector<HTMLDivElement>('.page-scale-percentage')!.onclick = function () {
    console.log('page-scale-recovery')
    instance.command.executePageScaleRecovery()
  }

  document.querySelector<HTMLDivElement>('.page-scale-minus')!.onclick = function () {
    console.log('page-scale-minus')
    instance.command.executePageScaleMinus()
  }

  document.querySelector<HTMLDivElement>('.page-scale-add')!.onclick = function () {
    console.log('page-scale-add')
    instance.command.executePageScaleAdd()
  }

  // 纸张大小
  const paperSizeDom = document.querySelector<HTMLDivElement>('.paper-size')!
  const paperSizeDomOptionsDom = paperSizeDom.querySelector<HTMLDivElement>('.options')!
  paperSizeDom.onclick = function () {
    paperSizeDomOptionsDom.classList.toggle('visible')
  }
  paperSizeDomOptionsDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    const paperType = li.dataset.paperSize!
    const [width, height] = paperType.split('*').map(Number)
    instance.command.executePaperSize(width, height)
    // 纸张状态回显
    paperSizeDomOptionsDom.querySelectorAll('li')
      .forEach(child => child.classList.remove('active'))
    li.classList.add('active')
  }

  // 纸张方向
  const paperDirectionDom = document.querySelector<HTMLDivElement>('.paper-direction')!
  const paperDirectionDomOptionsDom = paperDirectionDom.querySelector<HTMLDivElement>('.options')!
  paperDirectionDom.onclick = function () {
    paperDirectionDomOptionsDom.classList.toggle('visible')
  }
  paperDirectionDomOptionsDom.onclick = function (evt) {
    const li = evt.target as HTMLLIElement
    const paperDirection = li.dataset.paperDirection!
    instance.command.executePaperDirection(<PaperDirection>paperDirection)
    // 纸张方向状态回显
    paperDirectionDomOptionsDom.querySelectorAll('li')
      .forEach(child => child.classList.remove('active'))
    li.classList.add('active')
  }

  // 页面边距
  const paperMarginDom = document.querySelector<HTMLDivElement>('.paper-margin')!
  paperMarginDom.onclick = function () {
    const [topMargin, rightMargin, bottomMargin, leftMargin] = instance.command.getPaperMargin()
    alert('待完善')
    // new Dialog({
    //   title: '页边距',
    //   data: [{
    //     type: 'text',
    //     label: '上边距',
    //     name: 'top',
    //     required: true,
    //     value: `${topMargin}`,
    //     placeholder: '请输入上边距'
    //   }, {
    //     type: 'text',
    //     label: '下边距',
    //     name: 'bottom',
    //     required: true,
    //     value: `${bottomMargin}`,
    //     placeholder: '请输入下边距'
    //   }, {
    //     type: 'text',
    //     label: '左边距',
    //     name: 'left',
    //     required: true,
    //     value: `${leftMargin}`,
    //     placeholder: '请输入左边距'
    //   }, {
    //     type: 'text',
    //     label: '右边距',
    //     name: 'right',
    //     required: true,
    //     value: `${rightMargin}`,
    //     placeholder: '请输入右边距'
    //   }],
    //   onConfirm: (payload) => {
    //     const top = payload.find(p => p.name === 'top')?.value
    //     if (!top) return
    //     const bottom = payload.find(p => p.name === 'bottom')?.value
    //     if (!bottom) return
    //     const left = payload.find(p => p.name === 'left')?.value
    //     if (!left) return
    //     const right = payload.find(p => p.name === 'right')?.value
    //     if (!right) return
    //     instance.command.executeSetPaperMargin([
    //       Number(top),
    //       Number(right),
    //       Number(bottom),
    //       Number(left)
    //     ])
    //   }
    // })
  }

  // 全屏
  const fullscreenDom = document.querySelector<HTMLDivElement>('.fullscreen')!
  fullscreenDom.onclick = toggleFullscreen
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'F11') {
      toggleFullscreen()
      evt.preventDefault()
    }
  })
  document.addEventListener('fullscreenchange', () => {
    fullscreenDom.classList.toggle('exist')
  })
  function toggleFullscreen() {
    console.log('fullscreen')
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  instance.listener.visiblePageNoListChange = function (payload) {
    const text = payload.map(i => i + 1).join('、')
    document.querySelector<HTMLSpanElement>('.page-no-list')!.innerText = text
  }

  instance.listener.pageSizeChange = function (payload) {
    document.querySelector<HTMLSpanElement>('.page-size')!.innerText = `${payload}`
  }

  instance.listener.intersectionPageNoChange = function (payload) {
    document.querySelector<HTMLSpanElement>('.page-no')!.innerText = `${payload + 1}`
  }

  instance.listener.pageScaleChange = function (payload) {
    document.querySelector<HTMLSpanElement>('.page-scale-percentage')!.innerText = `${Math.floor(payload * 10 * 10)}%`
  }

  instance.listener.pageModeChange = function (payload) {
    const activeMode = pageModeOptionsDom.querySelector<HTMLLIElement>(`[data-page-mode='${payload}']`)!
    pageModeOptionsDom.querySelectorAll('li').forEach(li => li.classList.remove('active'))
    activeMode.classList.add('active')
  }

  instance.listener.contentChange = async function () {
    const wordCount = await instance.command.getWordCount()
    document.querySelector<HTMLSpanElement>('.word-count')!.innerText = `${wordCount || 0}`
  }

  instance.listener.saved = function (payload) {
    console.log('elementList: ', payload)
  }

})
</script>
<style lang="scss">
.footer {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f2f4f7;
  z-index: 9;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 12px;
  padding: 0 4px 0 20px;
  box-sizing: border-box;
}

.footer > div:first-child {
  display: flex;
  align-items: center;
}

.footer .page-mode {
  padding: 1px;
  position: relative;
}

.footer .page-mode i {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  cursor: pointer;
  display: inline-block;
  background-image: url('~@/assets/editor/page-mode.svg');
}

.footer .options {
  width: 70px;
  position: absolute;
  left: 0;
  bottom: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: none;
}

.footer .options.visible {
  display: block;
}

.footer .options li {
  padding: 5px;
  margin: 5px 0;
  user-select: none;
  transition: all 0.3s;
  text-align: center;
  cursor: pointer;
}

.footer .options li:hover {
  background-color: #ebecef;
}

.footer .options li.active {
  background-color: #e2e6ed;
}

.footer > div:first-child > span {
  display: inline-block;
  margin-right: 5px;
  letter-spacing: 1px;
}

.footer > div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer > div:last-child > div {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer > div:last-child > div:hover {
  background: rgba(25, 55, 88, 0.04);
}

.footer > div:last-child i {
  width: 16px;
  height: 16px;
  display: inline-block;
  cursor: pointer;
}

.footer .page-scale-minus i {
  background-image: url('~@/assets/editor/page-scale-minus.svg');
}

.footer .page-scale-add i {
  background-image: url('~@/assets/editor/page-scale-add.svg');
}

.footer .page-scale-percentage {
  cursor: pointer;
  user-select: none;
}

.footer .fullscreen i {
  background-image: url('~@/assets/editor/request-fullscreen.svg');
}

.footer .fullscreen.exist i {
  background-image: url('~@/assets/editor/exit-fullscreen.svg');
}

.footer .paper-margin i {
  background-image: url('~@/assets/editor/paper-margin.svg');
}

.footer .editor-mode {
  cursor: pointer;
  user-select: none;
}

.footer .paper-size {
  position: relative;
}

.footer .paper-size i {
  background-image: url('~@/assets/editor/paper-size.svg');
}

.footer .paper-size .options {
  right: 0;
  left: unset;
}

.footer .paper-direction {
  position: relative;
}

.footer .paper-direction i {
  background-image: url('~@/assets/editor/paper-direction.svg');
}

.footer .paper-direction .options {
  right: 0;
  left: unset;
}
</style>
