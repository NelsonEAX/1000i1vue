<template>
    <div class="row">
        <category
                v-for="category in categories"
                :category="category"
                :products="products | thisCategoryProduct( category.id )"
        ></category>
    </div>
</template>

<script>
    import Product from './Product.vue'
    import Category from './Category.vue'

    export default {
        data () {
            return {
                categories: [],
                products: []
            }
        },

        components: {
            'category': Category,
            'product': Product
        },
        filters: {
            thisCategoryProduct: function (products, categoryID) {
               // console.log('categoryID', categoryID);//###TODO: delete
               // console.log(products.filter( product => product.category == categoryID ))//###TODO: delete
                return products.filter( product => product.category_id == categoryID );
            }
        },
        /*hook*/
        created (){
            //console.log('Получаю категории');//###TODO: delete
            //После авторизации полуаем данные юзера с сервера
            this.$http.get('api/categories', this.$store.getters.getHeaders).then(response => {
                console.log('категории',response.body);//###TODO: delete
                this.categories = response.body;
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
