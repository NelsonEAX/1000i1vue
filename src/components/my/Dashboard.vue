<template>
    <div>
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-aqua">
                    <div class="inner">
                        <h3>111</h3>
                        <p>Меню 111</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-cog"></i>
                    </div>
                    <router-link tag="a" to="/my" class="small-box-footer">
                        Подробнее <i class="fa fa-arrow-circle-right"></i>
                    </router-link>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-green">
                    <div class="inner">
                        <h3>222</h3>
                        <p>Меню 222</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-calendar"></i>
                    </div>
                    <router-link tag="a" to="/my" class="small-box-footer">
                        Подробнее <i class="fa fa-arrow-circle-right"></i>
                    </router-link>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-yellow">
                    <div class="inner">
                        <h3>333</h3>
                        <p>Меню 333</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-address-book"></i>
                    </div>
                    <router-link tag="a" to="/my" class="small-box-footer">
                        Подробнее <i class="fa fa-arrow-circle-right"></i>
                    </router-link>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-red">
                    <div class="inner">
                        <h3>444</h3>
                        <p>Меню 444</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-bolt"></i>
                    </div>
                    <router-link tag="a" to="/my" class="small-box-footer">
                        Подробнее <i class="fa fa-arrow-circle-right"></i>
                    </router-link>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <!-- ./Small boxes (Stat box) -->

        <div class="row">
            <!-- Left col -->
            <section class="col-lg-7 connectedSortable">
                <!-- Box -->
                <div class="box box-info">
                    <div class="box-header">
                        <i class="fa fa-cog"></i>
                        <h3 class="box-title">Левая панель 1</h3>
                        <div class="box-tools pull-right" data-toggle="tooltip" title="Status">
                            <div class="btn-group" data-toggle="btn-toggle">
                                <button type="button" class="btn btn-default btn-sm active">
                                    <i class="fa fa-square text-green"></i>
                                </button>
                                <button type="button" class="btn btn-default btn-sm">
                                    <i class="fa fa-square text-red"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="box-body">
                        <br><br><br><br><br><br><br><br><br><br><br>
                    </div>
                    <div class="box-footer">
                        <br>
                    </div>
                </div>
                <!-- /.box -->
                <!-- Box -->
                <div class="box box-info">
                    <div class="box-header">
                        <i class="fa fa-cog"></i>
                        <h3 class="box-title">Левая панель 2</h3>
                        <div class="box-tools pull-right" data-toggle="tooltip" title="Status">
                            <div class="btn-group" data-toggle="btn-toggle">
                                <button type="button" class="btn btn-default btn-sm active">
                                    <i class="fa fa-square text-green"></i>
                                </button>
                                <button type="button" class="btn btn-default btn-sm">
                                    <i class="fa fa-square text-red"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="box-body">
                        <br><br><br><br><br><br><br><br><br><br>
                    </div>
                    <div class="box-footer">
                        <br>
                    </div>
                </div>
                <!-- /.box -->
            </section>
            <!-- /.Left col -->

            <!-- Right col -->
            <section class="col-lg-5 connectedSortable">
                <!-- Box -->
                <div class="box box-danger">
                    <div class="box-header">
                        <i class="fa fa-cog"></i>
                        <h3 class="box-title">Правая панель 1</h3>
                        <div class="box-tools pull-right" data-toggle="tooltip" title="Status">
                            <div class="btn-group" data-toggle="btn-toggle">
                                <button type="button" class="btn btn-default btn-sm active">
                                    <i class="fa fa-square text-green"></i>
                                </button>
                                <button type="button" class="btn btn-default btn-sm">
                                    <i class="fa fa-square text-red"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="box-body">
                        <br><br><br><br><br>
                    </div>
                    <div class="box-footer">
                        <br>
                    </div>
                </div>
                <!-- /.box -->
                <!-- Box -->
                <div class="box box-danger">
                    <div class="box-header">
                        <i class="fa fa-cog"></i>
                        <h3 class="box-title">Правая панель 2</h3>
                        <div class="box-tools pull-right" data-toggle="tooltip" title="Status">
                            <div class="btn-group" data-toggle="btn-toggle">
                                <button type="button" class="btn btn-default btn-sm active">
                                    <i class="fa fa-square text-green"></i>
                                </button>
                                <button type="button" class="btn btn-default btn-sm">
                                    <i class="fa fa-square text-red"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="box-body">
                        <br><br><br><br><br>
                    </div>
                    <div class="box-footer">
                        <br>
                    </div>
                </div>
                <!-- /.box -->
                <!-- Box -->
                <div class="box box-danger">
                    <div class="box-header">
                        <i class="fa fa-cog"></i>
                        <h3 class="box-title">Правая панель 3</h3>
                        <div class="box-tools pull-right" data-toggle="tooltip" title="Status">
                            <div class="btn-group" data-toggle="btn-toggle">
                                <button type="button" class="btn btn-default btn-sm active">
                                    <i class="fa fa-square text-green"></i>
                                </button>
                                <button type="button" class="btn btn-default btn-sm">
                                    <i class="fa fa-square text-red"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="box-body">
                        <br><br><br><br><br>
                    </div>
                    <div class="box-footer">
                        <br>
                    </div>
                </div>
                <!-- /.box -->
            </section>
            <!-- /.Right col -->

        </div>

    </div>
</template>

<script>
    export default {
    }
</script>

