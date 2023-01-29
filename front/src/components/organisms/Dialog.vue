<template>
    <div class="container">
        <div class="dialog">
            <div class="dialog__header">
                <div class="dialog__header__title-box">
                    <CreateCheckBox />
                    <span class="title">Development Environment Setting</span>
                    <button class="button" @click="close">
                        <i class="fa-solid fa-circle-xmark fa-2xl"></i>
                    </button>
                </div>
                <div class="dialog__header__date-picker">
                    <CreateDatePicker :label="'From'" />
                    <CreateDatePicker :label="'To'" />
                </div>
            </div>
            <el-divider style="margin: 0" />
            <div class="dialog__body">
                <VMarkdownEditor v-model="content" locale="en" :upload-action="handleUpload" />
            </div>
            <div class="dialog__footer">
                <Button label="Cancel" @click="close" />
                <Button :theme="'filled'" label="Done" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { VMarkdownEditor } from 'vue3-markdown';
import 'vue3-markdown/dist/style.css';

import Button from '~/components/atoms/Button.vue';
import CreateCheckBox from '~/components/atoms/create/checkBox.vue';
import CreateDatePicker from '~/components/atoms/create/DatePicker.vue';

export default {
    components: { CreateCheckBox, CreateDatePicker, Button, VMarkdownEditor },
    setup(props, context) {
        // 다이얼로그 Vue3 마크다운
        const content = ref('');
        const handleUpload = (file) => {
            console.log(file);
            return 'https://i.postimg.cc/52qCzTVw/pngwing-com.png';
        };

        // 다이얼로그 닫기
        const close = () => {
            context.emit('closeDialog', false);
        };

        return {
            content,
            handleUpload,
            close,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba($color-white-800, 50%);

    position: absolute;
    right: 50%;
    transform: translateX(50%);
}
.dialog {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 1200px - 72px;
    height: 767px - 52px;

    padding: 26px 36px;
    gap: 20px;

    border-radius: 6px;
    background-color: $color-white-000;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.05);

    &__header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;

        padding: 0;
        gap: 27px;

        &__title-box {
            display: flex;
            align-items: center;

            width: 100%;

            gap: 17px;

            position: relative;
        }
        .title {
            color: #303030;

            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
        }
        &__date-picker {
            display: flex;
            align-items: center;

            gap: 17px;
        }
        .button {
            outline: none;
            border: none;
            background: transparent;

            position: absolute;
            right: 0;

            cursor: pointer;

            i {
                color: $color-red-000;
            }
        }
    }
    &__body {
        width: 100%;
        height: 530px;

        // background-color: $color-white-500;
    }
    &__footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        width: 100%;

        gap: 16px;
    }
}
</style>
