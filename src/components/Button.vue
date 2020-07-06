<template>
    <a v-if="color === 'white'" class="white-btn-fill" >
        <slot></slot>
    </a>
    <a v-else class="btn-fill">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: ''
        }
    }
};
</script>
<style scoped>

a {
    font-size: 16px;
    font-weight: 600;
    padding: 14px 45px;
    display: inline-block;
    border-radius: 50px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.4s;
}

a.btn-fill {
    background: #00C9B7;
    color: #fff;
}

a.btn-fill:hover{
    background: #fff;
    color: #00C9B7;
}

a.white-btn-fill {
    background: #fff;
    color:#00C9B7
}

a.white-btn-fill:hover {
    background: #00C9B7;
    color: #fff;
}
</style>