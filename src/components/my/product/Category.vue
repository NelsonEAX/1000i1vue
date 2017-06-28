<template>
    <div v-show="products.length">
        <div class="col-md-12">
            <div :class="{
                'box': true,
                'collapsed-box': !this.showCategory
            }">
            <!--<div class="box collapsed-box">-->
                <div class="box-header with-border" @click="switchShowCategory()">
                    <h3 class="box-title">{{ category.name }}</h3>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool">
                            <i class="fa fa-lg fa-caret-down" v-if="this.showCategory"></i>
                            <i class="fa fa-lg fa-caret-right" v-else></i>
                        </button>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-footer">
                    <div class="row">
                        <product
                                v-for="product in showProducts"
                                :product="product"
                        ></product>
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</template>

<script>
    import Product from './Product.vue'
    export default {
        data() {
            return {
                showCategory: false, //По умолчанию категории свернуты
                urls: this.$store.getters.getAllImgFromStorage( this.category, 330, 330 ),
            }
        },
        components: {
            'product': Product,
        },
        computed: {
            showProducts: function () {
                //console.log('switch');//###TODO: delete
                return this.showCategory ? this.products : {} ;
            },
            urls_count: function () {
                return this.urls.length;
            },
        },
        methods: {
            switchShowCategory(){
                this.showCategory = !this.showCategory;
            },
            getBackgroundImage(url){
                return 'background-image:url(' + url + ')';
            },
            getImgSrcFromJsonString(string){
                console.log( string );//###TODO: delete
                console.log( JSON.parse(string) );//###TODO: delete
                return JSON.parse(string)
            },
        },
        props: ['products','category'],
    }
</script>