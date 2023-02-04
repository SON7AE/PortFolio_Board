<template>
    <div class="round">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox"></label>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';
.round {
    position: relative;
}
.round label {
    width: 24px;
    height: 24px;
    background-color: $color-white-000;
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    cursor: pointer;
    position: absolute;
    top: -5px;
    left: 0;
}
.round label:after {
    width: 12px;
    height: 6px;
    border: 2px solid $color-white-000;
    border-top: none;
    border-right: none;
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    transform: rotate(-45deg);
    opacity: 0;
}
.round input[type='checkbox'] {
    visibility: hidden;
}
.round input[type='checkbox']:checked + label {
    background-color: $color-green-000;
    border-color: $color-green-000;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
}
.round input[type='checkbox']:checked + label:after {
    opacity: 1;
}
</style>
