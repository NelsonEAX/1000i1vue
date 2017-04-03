<template>
    <div class="row">
        <product
            v-for="product in products"
            :product="product"
        ></product>
    </div>
</template>

<script>
    import Product from './Product.vue'
    export default {
        data () {
            return {
                categories: [],
                products: []
            }
        },

        components: {
            'product': Product
        },

        /*hook*/
        created (){
            console.log('Получаю категории');//###TODO: delete
            //После авторизации полуаем данные юзера с сервера
            this.$http.get('api/categories', this.$store.getters.getHeaders).then(response => {
                console.log('категории',response.body);//###TODO: delete
                //this.$store.dispatch('setUserInfo',response.body.user);
            })

            console.log('Получаю продукцию');//###TODO: delete
            //После авторизации полуаем данные юзера с сервера
            this.$http.get('api/products', this.$store.getters.getHeaders).then(response => {
                console.log('продукция',response.body);//###TODO: delete
            this.products = response.body;
            //this.$store.dispatch('setUserInfo',response.body.user);
        })
        },
    }
</script>
