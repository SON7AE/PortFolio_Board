<template>
    <div class="content">
        <div class="content__text-box">
            <span class="content__text-box__title">How to start :</span>
            <div class="content__text-box__subTitle-box">
                <span class="content__text-box__subTitle-box__subTitle">1. Create a page</span>
                <span class="content__text-box__subTitle-box__subTitle">2. Add boards to page</span>
            </div>
            <Button :theme="'secondary'" label="Add New Page" />
        </div>
    </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'

export default { components: { Button } }
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.content {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 855px;
    height: 100vh;

    border-right: 1px solid #e6e6e6;
    background-color: #f9f9f9;

    &__text-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 19px;

        &__title {
            font-size: 28px;
            font-weight: 700;
        }
        &__subTitle-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &__subTitle {
                font-size: 18px;
                font-weight: 500;
                line-height: 32px;
            }
        }
    }
}
</style>
