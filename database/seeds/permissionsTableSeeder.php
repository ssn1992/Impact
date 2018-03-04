<?php

use Illuminate\Database\Seeder;

class permissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('permissions')
         ->insert([
        [
            'name' => 'Date Filter',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Export',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Brand Filter',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Dashboard Totals',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Dashboard Uniques',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Dashboard Graph',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Dashboard Ebooks',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Dashboard Newsletters',
            'guard_name' => 'web',
        
        ],
        [
            'name' => 'Dashboard Subscribbers',
            'guard_name' => 'web',
        
        ],
       ]);
    }
}
