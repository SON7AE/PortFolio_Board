<template>
    <div class="page">
        <Navigation />
        <BasicContent />
    </div>
</template>

<script>
import Navigation from '~/components/organisms/Navigation.vue';
import BasicContent from '../components/organisms/basic/Content.vue';

export default {
    components: { Navigation, BasicContent },
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
