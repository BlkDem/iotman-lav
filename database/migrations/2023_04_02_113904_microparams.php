<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     *  'id',
        'param_name',
        'param_value',
        'param_min',
        'param_max',
        'param_suff',
        'param_desc',
        'param_in',
        'micro_id',
        'created_at',
        'updated_at'
     *
     * @return void
     */
    public function up()
    {
        Schema::create('microparams', function (Blueprint $table) {
            $table->id();
            $table->string('param_name', 255)->unique();
            $table->string('param_value', 255)->nullable();
            $table->string('param_min', 255)->nullable();
            $table->string('param_max', 255)->nullable();
            $table->string('param_suff', 255)->nullable();
            $table->boolean('param_in')->nullable();
            $table->bigInteger('device_micro_id')->unsigned();
            $table->string('param_desc', 1024)->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('microparams');
    }
};
