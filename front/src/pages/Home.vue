<template>
    <div class="page">
        <Navigation />
        <!-- <BasicContent /> -->
        <CreateContent @openDialog="openDialog" />
        <!-- 다이얼로그 -->
        <!-- 비교적 많이 사용될 기능이기 때문에 호출될 때마다 랜더링 되는 v-if 보다 v-show를 사용해 토글처럼 보이도록 한다. -->
        <Dialog v-show="dialogVisible" @closeDialog="closeDialog" />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import Navigation from '~/components/organisms/Navigation.vue'
import BasicContent from '~/components/organisms/basic/Content.vue'
import CreateContent from '~/components/organisms/create/Content.vue'
import Dialog from '../components/organisms/Dialog.vue'

export default {
    components: { Navigation, BasicContent, CreateContent, Dialog },
    setup() {
        const dialogVisible = ref(false)
        // 다이얼로그 열기
        const openDialog = (value) => {
            dialogVisible.value = value
        }
        // 다이얼로그 닫기
        const closeDialog = (value) => {
            dialogVisible.value = value
        }

        return { dialogVisible, openDialog, closeDialog }
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.page {
    display: flex;
    align-items: center;

    width: 1137px;

    margin: auto;

    position: relative;
}
</style>
