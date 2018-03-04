<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(brandsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(rolesTableSeeder::class);
        $this->call(levelTableSeeder::class);
        $this->call(formsTableSeeder::class);
        $this->call(lead_classesTableSeeder::class);
        $this->call(lead_typesTableSeeder::class);
        $this->call(lead_token_brandsTableSeeder::class);
        $this->call(showroomsTableSeeder::class);
        $this->call(cross_typeTableSeeder::class);
        $this->call(source_categoriesTableSeeder::class);
        $this->call(country_continentTableSeeder::class);
        $this->call(countriesTableSeeder::class);
        $this->call(statesTableSeeder::class);
        $this->call(ctas_colorsTableSeeder::class);
        $this->call(ctasTableSeeder::class);
        $this->call(pagesTableSeeder::class);
        $this->call(page_positionsTableSeeder::class);
        $this->call(tradeshowsTableSeeder::class);
        $this->call(advertisingTableSeeder::class);
        $this->call(infographicsTableSeeder::class);
        $this->call(pressesTableSeeder::class);
        $this->call(cataloguesTableSeeder::class);
        $this->call(socialNetworksTableSeeder::class);
        $this->call(websitesTableSeeder::class);
        $this->call(platformsTableSeeder::class);
        $this->call(permissionsTableSeeder::class);
        $this->call(tradeshowsCategoriesTableSeeder::class);
        $this->call(tradeshow_timeTableSeeder::class);
        $this->call(tradeshow_editionTableSeeder::class);
        $this->call(ebookcategoryTableSeeder::class);
        $this->call(ebookTableSeeder::class);
        $this->call(phoneTableSeeder::Class);
        $this->call(emailsTableSeeder::Class);
        $this->call(brandAccessTableSeeder::class);
        $this->call(inOutClassTableSeeder::class);
        $this->call(typeClassTableSeeder::class);
        $this->call(directContactTableSeeder::class);
        $this->call(partner_brandsTableSeeder::class);
        $this->call(partner_brand_typeTableSeeder::class);  
        $this->call(blog_categoriesTableSeeder::class);
        $this->call(blogTableSeeder::class);
        $this->call(occupationTableSeeder::class);
        $this->call(sourcesTableSeeder::class);
        $this->call(budgetTableSeeder::class);
        $this->call(networkLeadStatesTableSeeder::Class);
        $this->call(lead_RequestTableSeeder::class);
        $this->call(crossTableSeeder::class);
        $this->call(networkcrossTableSeeder::class);
        $this->call(SocialNetwork_subType::class);
    }
}