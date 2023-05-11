<template>
  <div>首页</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { computed } from 'vue'
const userStore = useUserStore()

const userInfo = computed(() => {
  return userStore.userInfo
})
</script>
