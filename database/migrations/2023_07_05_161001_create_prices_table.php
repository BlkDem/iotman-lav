<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->string('price_desc', 255)->nullable();
            $table->float('price_value');
            $table->bigInteger('price_group_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('prices', function (Blueprint $table) {
            $table->foreign('price_group_id')->references('id')->on('price_groups')->onDelete('restrict');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prices');
    }
};
