<template>
    <div class="row">
        <my-product
        v-for="product in products"
        :product="product"
        ></my-product>
    </div>
</template>

<script>
    import Product from './Product.vue'
    export default {
        data () {
            return {
                products: []
            }
        },

        components: {
            'my-product': Product
        },

        /*hook*/
        created (){
            this.$http.get('api/user', this.$store.getters.getHeaders)
                    .then(response => {
                this.products = response.body
            })
        },
    }
</script>
