<template>
    <span class="icon" :class="clazz" :style="style">
    </span>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'act-icon',
        data() {
            return {
            };
        },
        props: {
            type: {
                type: Number
            },
            size: {
                type: Number
            }
        },
        computed: {
            clazz() {
                return this.classMap[this.type];
            },
            style() {
                return {
                    'width': this.size + 'px',
                    'height': this.size + 'px',
                    'background-size': this.size + 'px ' + this.size + 'px',
                    'background-repeat': 'no-repeat'
                };
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin";
    .icon
        display inline-block
        vertical-align middle
        background-repeat no-repeat
        &.decrease
            bg-image('img/decrease_1')
        &.discount
            bg-image('img/discount_1')
        &.guarantee
            bg-image('img/guarantee_1')
        &.special
            bg-image('img/special_1')
        &.invoice
            bg-image('img/invoice_1')
</style>