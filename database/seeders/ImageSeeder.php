<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Image::create(
            [
                'image_name' => 'd_200.png',
                'image_desc' => 'Devices produced by Umolab Group',
                'album_id' => 1,
            ]);

        Image::create(
            [
                'image_name' => 'dp_200.png',
                'image_desc' => 'Devices produced by Umolab Group',
                'album_id' => 1,
            ]);
        Image::create(
            [
                'image_name' => 'g1_200.png',
                'image_desc' => 'Devices produced by Umolab Group',
                'album_id' => 1,
            ]);
        Image::create(
            [
                'image_name' => 'u1_200.png',
                'image_desc' => 'Devices produced by Umolab Group',
                'album_id' => 1,
            ]
        );
    }

    //
}
