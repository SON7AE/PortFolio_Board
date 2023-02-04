<template>
    <button :data-theme="theme" class="button">{{ label }}</button>
</template>

<script>
export default {
    props: {
        /**@type {import("vue".PropType<Theme>)} */
        theme: {
            type: String,
            required: false,
            default: 'normal',
        },
        label: {
            type: String,
            required: false,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.button {
    outline: none;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 9px 12px;

    color: $color-white-700;
    border-radius: 4px;
    background: transparent;

    cursor: pointer;

    &:hover {
        background-color: $color-white-300;
    }
    &[data-theme='filled'] {
        color: $color-white-000;
        background-color: $color-orange-100;

        &:hover {
            padding: 8px 11px;

            border: 1px solid $color-orange-200;
            background-color: $color-orange-100;
        }
    }
    &[data-theme='secondary'] {
        border: 1px solid $color-orange-100;
        background-color: $color-white-000;
        color: $color-orange-100;

        &:hover {
            background-color: $color-white-100;
        }
    }
    &[data-theme='ghost'] {
        background-color: $color-white-300;
        color: $color-white-600;

        &:hover {
            background-color: #e7e7e7;
            color: $color-white-600;
        }
    }
}
</style>
