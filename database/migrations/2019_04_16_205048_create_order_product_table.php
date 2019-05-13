<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

            Schema::create('order_product', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('order_id')->unsigned();
                $table->integer('product_id')->unsigned();
                $table->integer('form_id')->unsigned();
                $table->integer('order')->nullable()->default(null);
                $table->text('customisation_data')->nullable()->default(null);
                $table->integer('unit_price')->default(0);
                $table->integer('qty')->default(1);
                $table->integer('sub_total')->default(0);
                $table->integer('extras')->default(0);
                $table->integer('total')->default(0);
                $table->string('status')->nullable()->default(null);
                $table->timestamps();

                $table->foreign('product_id')
                    ->references('id')->on('products')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');

                $table->foreign('order_id')
                    ->references('id')->on('orders')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');

                $table->foreign('form_id')
                    ->references('id')->on('forms')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
            });

        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_product');
    }
}