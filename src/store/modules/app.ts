import { defineStore } from 'pinia'
import {
  getActiveThemeName,
  setActiveThemeName
} from '@/utils/cookies'
import themeList from '@/config/theme'

export enum DeviceType {
  Mobile,
  Desktop,
}

interface IAppState {
  /** 主题列表 */
  themeList: { title: string, name: string }[]
  /** 正在应用的主题的名字 */
  activeThemeName: string
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): IAppState => {
    return {
      themeList: themeList,
      activeThemeName: getActiveThemeName() || 'normal'
    }
  },
  actions: {
    setTheme(activeThemeName: string) {
      // 检查这个主题在主题列表里是否存在
      this.activeThemeName = this.themeList.find(
        (theme) => theme.name === activeThemeName
      )
        ? activeThemeName
        : this.themeList[0].name
      // 应用到 dom
      document.body.className = `theme-${this.activeThemeName}`
      // 持久化
      setActiveThemeName(this.activeThemeName)
    },
    initTheme() {
      // 初始化
      document.body.className = `theme-${this.activeThemeName}`
    }
  }
})
