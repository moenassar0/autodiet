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
        Schema::create('meal_recipes', function (Blueprint $table) {
            $table
                ->foreignId('meal_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table
                ->foreignId('recipe_item_id')
                ->constrained('food_items')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('multiplier');
            $table->primary(array('meal_id', 'recipe_item_id'));
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
        Schema::dropIfExists('meal_recipes');
    }
};
