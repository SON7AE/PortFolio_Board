<template>
    <div class="content">
        <div class="content__header">
            <input v-model="title" type="text" placeholder="Enter Title Here" class="content__header__title" />
            <div class="content__header__progress">
                <span class="content__header__progress__step">0/0 Completed</span>
                <el-progress :percentage="100" status="success" :color="customColor" />
            </div>
            <div class="content__header__date-picker">
                <CreateDatePicker :label="'From'" />
                <CreateDatePicker :label="'To'" />

                <Button :theme="'ghost'" label="View Timeline" />
                <Button :theme="'filled'" label="Add New Board" class="button" />
            </div>
        </div>
        <div class="content__body"></div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import CreateDatePicker from '~/components/atoms/create/DatePicker.vue';
import Button from '~/components/atoms/Button.vue';

export default {
    components: { CreateDatePicker, Button },
    setup() {
        const title = ref(''); // 제목
        const customColor = ref('#00EA88'); // 프로그레스 바
        const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`); // 프로그레스 바

        return { title, format, customColor };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.content {
    display: flex;
    flex-direction: column;

    width: 860px;
    height: 100vh;

    &__header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;

        padding: 16px 29px;
        gap: 15px;
        margin-top: 84px;

        border-right: 1px solid #e6e6e6;
        background-color: $color-white-000;

        &__title {
            outline: none;
            border: none;

            font-size: 36px;
            font-weight: 700;
            line-height: 32px;

            &::placeholder {
                color: #c4c4c4;
            }
        }
        &__progress {
            display: flex;
            align-items: center;

            gap: 13px;

            &__step {
                color: $color-white-700;
            }
            .el-progress--line {
                width: 238px;
            }
        }
        &__date-picker {
            display: flex;
            align-items: center;

            width: 100%;

            gap: 20px;
        }
    }
}
.button {
    color: $color-white-000;
}
</style>
