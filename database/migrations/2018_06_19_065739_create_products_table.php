<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
            Schema::create('products', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name')->nullable();
                $table->integer('price')->nullable()->default(null);
                $table->integer('variant_id')->unsigned()->nullable();
                $table->boolean('use_variant_data')->nullable();
                $table->boolean('use_variant_customisation')->nullable()->default(null);
                $table->boolean('can_customise')->nullable()->default(null);
                $table->boolean('list_in_shop')->nullable()->default(null);
                $table->string('slug')->nullable();
                $table->text('meta')->nullable()->default(null);
                $table->timestamp('live_at')->nullable()->default(null);
                $table->boolean('can_customise_width')->default(false);
                $table->boolean('can_customise_height')->default(false);
                $table->boolean('can_customise_depth')->default(false);
                $table->string('measurement_unit')->nullable()->default(null);
                $table->string('width')->nullable()->default(null);
                $table->string('height')->nullable()->default(null);
                $table->string('depth')->nullable()->default(null);
                $table->boolean('featured')->default(false);
                $table->softDeletes();
                $table->timestamps();
            });
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

            Schema::dropIfExists('products');

        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
