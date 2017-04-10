<template>
    <div class="col-md-3">
        <div class="thumbnail">
            <img :src="this.$store.getters.getMainImgFromStorage( this.product, 330, 330 )"
                 alt=""
                 class="img-responsive">
            <div class="caption">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <hr>
                <p>
                    <a href="" class="btn btn-default">Whish</a>
                    <a href="" class="btn btn-primary">Buy</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {},
        methods: {
            getImgSrcFromJsonString(string){
                console.log( JSON.parse(string));
                return JSON.parse(string)
            },
        },
        props: ['product'],
    }
</script>

