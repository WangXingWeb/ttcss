<template>
    <span>
        <button @click="add(-1)">-</button>
        <input style="width: 80px" type="text" v-model="v_step" />
        <button @click="add(1)">+</button>
    </span>
</template>
<script>
export default {
    props: {
        value: Number
    },
    data() {
        return {
            v_step: this.value
        }
    },
    watch: {
        value(val) {
            this.v_step = val
        }
    },
    methods: {
        add(num) {
            this.v_step += num
            this.$emit('input', this.v_step)
        }
    }
}
</script>
