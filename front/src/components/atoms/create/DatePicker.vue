<template>
    <div class="date-picker">
        <span class="date-picker__label">{{ label }}</span>
        <el-date-picker v-model="date" type="date" placeholder="Pick a date" :default-value="new Date(2010, 9, 1)" width="136px" />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
    props: {
        label: {
            type: String,
            required: false,
        },
    },
    setup() {
        const date = ref('');
        return { date };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.date-picker {
    display: flex;
    align-items: center;

    width: 183px;

    gap: 11px;

    &__label {
        color: $color-white-700;

        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
    }
}
</style>
