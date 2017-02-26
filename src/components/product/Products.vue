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
            this.$http.get('api/user')
                    .then(response => {
                this.products = response.body
            })
        }
    }
</script>
