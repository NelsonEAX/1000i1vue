<template>
    <div class="container" id="app">
        <div>
            <h1>FEED</h1>
            <my-products></my-products>
        </div>
    </div>
</template>

<script>
    import Products from './product/Products.vue'
    export default {
        components: {
            'my-products': Products
        }
    }
</script>

<style>

</style>