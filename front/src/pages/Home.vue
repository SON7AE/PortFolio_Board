<template>
    <div class="page">
        <Navigation />
        <!-- <BasicContent /> -->
        <CreateContent />
    </div>
</template>

<script>
import Navigation from '~/components/organisms/Navigation.vue';
import BasicContent from '~/components/organisms/basic/Content.vue';
import CreateContent from '~/components/organisms/create/Content.vue';

export default {
    components: { Navigation, BasicContent, CreateContent },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.page {
    display: flex;
    align-items: center;

    width: 1137px;

    margin: auto;
}
</style>
