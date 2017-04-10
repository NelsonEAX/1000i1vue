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
                <div class="box-body">
                    <div class="row">
                        <div class="col-md-4 vcenter">
                            <swiper :options="swiperOption">
                                <swiper-slide
                                    v-for="url in this.urls"
                                    :style="getBackgroundImage( url )"></swiper-slide>
                                <div v-if="urls_count > 1" class="swiper-pagination" slot="pagination"></div>
                                <div v-if="urls_count > 1" class="swiper-button-prev" slot="button-prev"></div>
                                <div v-if="urls_count > 1" class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div><!--
                        --><div class="col-md-8 vcenter">
                            {{ category.description }}
                        </div>
                    </div>
                    <!-- /.row -->
                </div>
                <!-- ./box-body -->
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
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                showCategory: false, //По умолчанию категории свернуты
                urls: this.$store.getters.getAllImgFromStorage( this.category, 330, 330 ),
                swiperOption: {
                    pagination: '.swiper-pagination',
                    effect: 'flip',
                    grabCursor: false,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                },
            }
        },
        components: {
            'product': Product,
            swiper,
            swiperSlide
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
                console.log(string );//###TODO: delete
                console.log( JSON.parse(string));//###TODO: delete
                return JSON.parse(string)
            },
        },
        props: ['products','category'],
    }
</script>

<style scoped>
    .swiper-container {
        width: 300px!important;
        height: 300px!important;
        padding: 50px!important;
    }
    .swiper-slide {
        background-position: 50%!important;
        background-size: cover!important;
        width: 100%!important;
        height: 100%!important;
    }
    .vcenter {
        display: inline-block;
        float: none;
        vertical-align: middle;
    }


</style>
