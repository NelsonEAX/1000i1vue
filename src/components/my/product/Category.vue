<template>
    <div v-show="products.length">
        <div class="col-md-12">
            <div :class="{
                'box': true,
                'collapsed-box': !this.showCategory
            }">
            <!--<div class="box collapsed-box">-->
                <div class="box-header with-border">
                    <h3 class="box-title">{{ category.name }}</h3>

                    <div class="box-tools pull-right">
                        <button @click="switchShowCategory()" type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                        <div class="btn-group">
                            <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-wrench"></i>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="row">
                        <product
                                v-for="product in showProducts"
                                :product="product"
                        ></product>
                    </div>
                    <!-- /.row -->
                </div>
                <!-- ./box-body -->
                <div class="box-footer">
                    <div class="row">

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
            }
        },
        components: {
            'product': Product
        },
        computed: {
            showProducts: function () {
                console.log('switch');
                return this.showCategory ? this.products : {} ;
            }
        },
        methods: {
            switchShowCategory(){
                this.showCategory = !this.showCategory;
            },
        },
        props: ['products','category'],
    }
</script>

