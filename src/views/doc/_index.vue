<template>
    <div>
        <div class="doc-header">
            <div
                v-for="item in menus"
                :key="item.path"
                class="menu-item"
                @click="gotoMenuPage(item)"
            >
                {{ item.title }}
            </div>
        </div>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const menus = ref([
    {
        title: '格式检测简报1',
        path: '/doc/report',
    },
    {
        title: '批注与校正',
        path: '/doc/correct',
    },
]);
const router = useRouter();
const gotoMenuPage = (item: any) => {
    router.push({
        path: item.path,
    });
};
</script>

<style lang="scss" scoped>
.doc-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: #005ce5;
}
.menu-item {
    font-size: 16px;
    color: #f8f8f8;
    min-width: 100px;
    text-align: center;
    margin: 0 10px;
}
</style>
