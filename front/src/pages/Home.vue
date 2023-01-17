<template>
    <div class="page">
        <Navigation />
        <!-- <BasicContent /> -->
        <CreateContent />
        <!-- 다이얼로그 -->
        <Dialog />
    </div>
</template>

<script>
import Navigation from '~/components/organisms/Navigation.vue';
import BasicContent from '~/components/organisms/basic/Content.vue';
import CreateContent from '~/components/organisms/create/Content.vue';
import Dialog from '../components/organisms/Dialog.vue';

export default {
    components: { Navigation, BasicContent, CreateContent, Dialog },
};
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
