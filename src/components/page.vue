<template>
    <n-grid cols="1 400:4 600:6" item-responsive>
        <n-grid-item>
            <div class="light-green">
                1
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="green">
                2
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="light-green">
                3
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="green">
                4
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="light-green">
                5
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="green">

            </div>
        </n-grid-item>
    </n-grid>
</template>

<script>
import {NGrid, NGridItem} from "naive-ui"
export default {
    name: "page",
    components: {
        NGrid,
        NGridItem
    }
}
</script>

<style scoped>
.light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
}
.green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>