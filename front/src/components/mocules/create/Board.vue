<template>
    <div class="board">
        <div class="board__header">
            <div class="board__header__title-box">
                <CreateCheckBox />
                <input v-model="title" placeholder="Board Title Here ..." class="input-box" />
            </div>
            <div class="board__header__date-picker">
                <div class="date-box">
                    <CreateDatePicker :theme="'text'" :label="'From'" />
                    <CreateDatePicker :theme="'text'" :label="'To'" />
                </div>
                <div class="button-box">
                    <Button label="Duplicate" />
                    <Button label="Delete" />
                </div>
            </div>
        </div>
        <el-divider />
        <div class="board__footer">
            <Button label="Add Contents" @click="sendEvent" />
        </div>
    </div>
</template>

<script>
import CreateCheckBox from '~/components/atoms/create/checkBox.vue'
import CreateDatePicker from '~/components/atoms/create/DatePicker.vue'
import Button from '~/components/atoms/Button.vue'

export default {
    components: { CreateCheckBox, CreateDatePicker, Button },
    setup(props, context) {
        const title = ''
        const sendEvent = () => {
            context.emit('openDialog', true)
        }

        return {
            title,
            sendEvent,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.board {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: calc(100% - 40px);

    padding: 20px;

    background: $color-white-000;
    border: 1px solid #ededed;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &__header {
        display: flex;
        flex-direction: column;

        width: 100%;

        gap: 23px;

        &__title-box {
            display: flex;
            align-items: center;

            width: 100%;
        }
        &__date-picker {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;
        }
    }
    &__footer {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        margin: -12px 0 -8px 0;
    }
}
.input-box {
    outline: none;
    border: none;

    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    margin: 0px 68px 0 17px;

    &::placeholder {
        color: #bdbdbd;
    }
}
.date-box {
    display: flex;
    align-items: center;

    gap: 17px;
}
.button-box {
    display: flex;
    align-items: center;

    gap: 6px;
}
</style>
