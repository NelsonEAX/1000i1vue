<template>
    <div class="col-md-4">
        <div class="thumbnail">
            <img src="https://yt3.ggpht.com/-cyWthQnpiro/AAAAAAAAAAI/AAAAAAAAAAA/MYbbWALSQa0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="">
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
        props: ['product']
    }
</script>

