<template>
    <button class="add-round-button">
        <span class="row"></span>
        <span class="column"></span>
    </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.add-round-button {
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 74px;
    height: 74px;

    border: 1px solid $color-orange-100;
    border-radius: 50%;
    background: transparent;

    position: relative;

    cursor: pointer;
}
.row {
    position: absolute;

    top: 50%;

    width: 32px;
    border: 0.5px solid $color-orange-100;
}
.column {
    position: absolute;

    top: 50%;

    width: 32px;
    border: 0.5px solid $color-orange-100;
    transform: rotate(90deg);
}
</style>
