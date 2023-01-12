<template>
    <div class="page">
        <Navigation />
    </div>
</template>

<script>
import Navigation from '~/components/organisms/Navigation.vue';

export default {
    components: { Navigation },
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
