<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDetailFieldsToOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->boolean('send_auto_emails')->nullable()->default(null);
            $table->boolean('send_shipping_emails')->nullable()->default(null);
            $table->date('thank_you_email_sent')->nullable()->default(null);
            $table->date('shipping_email_sent')->nullable()->default(null);
            $table->integer('amount_paid')->nullable()->default(null);
            $table->integer('delivery_cost')->nullable()->default(null);
            $table->date('delivery_date')->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('send_auto_emails');
            $table->dropColumn('amount_paid');
            $table->dropColumn('delivery_cost');
            $table->dropColumn('delivery_date');
            $table->dropColumn('thank_you_email_sent');
            $table->dropColumn('shipping_email_sent');
        });
    }
}
