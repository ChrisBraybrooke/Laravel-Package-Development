<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCollectionTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

            Schema::create('collection_types', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name');
                $table->string('individual_name')->nullable();
                $table->text('images')->nullable();
                $table->boolean('in_menu')->nullable();
                $table->string('slug')->nullable();
                $table->timestamp('live_at')->nullable()->default(null);
                $table->integer('collection_id')->unsigned();
                $table->text('meta')->nullable()->default(null);
                $table->integer('list_order')->nullable()->default(null);
                $table->boolean('in_index')->default(true);
                $table->integer('header_order')->nullable()->default(null);
                $table->softDeletes();
                $table->timestamps();

                $table->foreign('collection_id')
                    ->references('id')->on('collections')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
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

            Schema::dropIfExists('collection_types');

        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
