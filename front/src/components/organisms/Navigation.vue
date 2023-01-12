<template>
    <div class="navigation">
        <el-input v-model="searchText" class="w-50 m-2" placeholder="Search">
            <template #prefix>
                <el-icon class="el-input__icon">
                    <search />
                </el-icon>
            </template>
        </el-input>
        <Button :theme="'secondary'" label="Add New Page" />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Button from '~/components/atoms/Button.vue';

export default {
    components: {
        Button,
    },
    setup() {
        const searchText = ref('');

        return {
            searchText,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.navigation {
    display: flex;
    flex-direction: column;

    width: 282px;
    height: calc(100vh - 40px);

    padding: 20px 24px;
    gap: 13px;

    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: #e6e6e6;

    &__search {
        background-color: #f2f2f2;
    }
}
</style>
