<template>
    <div class="col-md-3">
        <div class="thumbnail">
            <img :src="this.imgsrc" alt="" class="img-responsive">
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
        props: ['product'],
        computed: {
            imgsrc: function () {
                if (this.product.uuid && this.product.extension)
                    return 'http://1000i1api:88/storage/' + this.product.uuid + '.' + this.product.extension;  /*this.product.path +*/
                else return '/static/img/users/noname.jpg';
            },
        }
    }
</script>

