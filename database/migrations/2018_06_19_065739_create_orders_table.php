<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

            Schema::create('orders', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('user_id')->unsigned()->nullable()->default(null);
                $table->string('user_first_name')->nullable()->default(null);
                $table->string('user_last_name')->nullable()->default(null);
                $table->string('user_email')->nullable()->default(null);
                $table->string('user_phone')->nullable()->default(null);
                $table->string('user_company')->nullable()->default(null);

                $table->string('billing_address_line1')->nullable()->default(null);
                $table->string('billing_address_line2')->nullable()->default(null);
                $table->string('billing_address_town')->nullable()->default(null);
                $table->string('billing_address_county')->nullable()->default(null);
                $table->string('billing_address_postcode')->nullable()->default(null);
                $table->string('billing_address_country')->nullable()->default(null);
                $table->boolean('use_billing_for_shipping')->default(true);

                $table->string('shipping_address_line1')->nullable()->default(null);
                $table->string('shipping_address_line2')->nullable()->default(null);
                $table->string('shipping_address_town')->nullable()->default(null);
                $table->string('shipping_address_county')->nullable()->default(null);
                $table->string('shipping_address_postcode')->nullable()->default(null);
                $table->string('shipping_address_country')->nullable()->default(null);

                $table->integer('cart_id')->unsigned()->nullable()->default(null);
                $table->json('cart_data')->nullable()->default(null);

                $table->string('payment_method')->nullable()->default(null);
                $table->string('payment_id')->nullable()->default(null);
                $table->string('payment_currency')->nullable()->default(null);
                $table->string('payment_amount')->nullable()->default(null);
                $table->string('payment_fee')->nullable()->default(null);

                $table->string('payment_source_id')->nullable()->default(null);
                $table->string('payment_source_brand')->nullable()->default(null);
                $table->string('payment_source_country')->nullable()->default(null);
                $table->string('payment_source_last4')->nullable()->default(null);
                $table->string('payment_source_exp_month')->nullable()->default(null);
                $table->string('payment_source_exp_year')->nullable()->default(null);

                $table->string('status')->nullable()->default(null);

                $table->timestamps();
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
        Schema::dropIfExists('orders');
    }
}
