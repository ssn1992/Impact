<?php 
 
use Illuminate\Support\Facades\Schema; 
use Illuminate\Database\Schema\Blueprint; 
use Illuminate\Database\Migrations\Migration; 
 
class CreateBugReportsTable extends Migration 
{ 
    /** 
     * Run the migrations. 
     * 
     * @return void 
     */ 
    public function up() 
    { 
        Schema::create('bug_reports', function (Blueprint $table) { 
            $table->increments('id'); 
            $table->integer("user_id");
            $table->string('email');
            $table->string("tittle");
            $table->longText("bug_description");
            $table->boolean("status")->default(0);
            $table->string("admin_response")->nullable(); 
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
        Schema::dropIfExists('bug_reports'); 
    } 
}