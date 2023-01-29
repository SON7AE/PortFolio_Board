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
                <Button :theme="'filled'" label="Add New Board" class="filled-button" />
            </div>
        </div>
        <div v-if="!isActive" :class="{ active: !isActive }" class="content__body">
            <CreateBoard @openDialog="sendEvent" />
        </div>
        <div v-else class="content__body">
            <div class="content__body__text-box">
                <span class="content__body__text-box__title">There is no board yet.</span>
                <span class="content__body__text-box__subTitle">Click the button and start flashing!</span>
            </div>
            <RoundAddButton @click="create" />
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import CreateDatePicker from '~/components/atoms/create/DatePicker.vue';
import Button from '~/components/atoms/Button.vue';
import RoundAddButton from '~/components/atoms/RoundAddButton.vue';
import CreateBoard from '~/components/mocules/create/Board.vue';

export default {
    components: { CreateDatePicker, Button, RoundAddButton, CreateBoard },
    setup(props, context) {
        // 제목
        const title = ref('');

        // 프로그레스 바
        const customColor = ref('#00EA88');
        const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);

        // 버튼 클릭 시 분기처리
        const isActive = ref(false);
        const create = () => {
            isActive.value = !isActive.value;
        };

        // 디이얼로그 열기
        const sendEvent = (value) => {
            context.emit('openDialog', value);
        };

        return { title, format, customColor, isActive, create, sendEvent };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.content {
    display: flex;
    flex-direction: column;

    width: 855px;
    height: 100vh;

    border-right: 1px solid #e6e6e6;

    &__header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: calc(100% - 32px);

        padding: 16px 29px;
        gap: 15px;
        margin-top: 84px;

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

            position: relative;
        }
    }
    &__body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: calc(100% - 32px);
        height: calc(100vh - 116px);

        padding: 28px 16px;
        gap: 28px;

        background-color: #f9f9f9;

        &.active {
            justify-content: flex-start;
        }
        &__text-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &__title {
                color: #454545;

                font-weight: 700;
                font-size: 24px;
                line-height: 32px;
            }
            &__subTitle {
                color: #454545;

                font-weight: 500;
                font-size: 18px;
                line-height: 32px;
            }
        }
    }
}
.filled-button {
    position: absolute;
    right: 27px;

    color: $color-white-000;
}
</style>
