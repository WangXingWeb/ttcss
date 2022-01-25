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
        step: Number
    },
    model: {
        prop: 'step', //使用props中step当双向绑定参数
        event: 'update' //自定事件名
    },
    data() {
        return {
            v_step: this.step
        }
    },
    watch: {
        step(val) {
            this.v_step = val
        }
    },
    methods: {
        add(num) {
            this.v_step += num
            this.$emit('update', this.v_step)
        }
    }
}
</script>
