<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model\Like;
use Faker\Generator as Faker;

$factory->define(Like::class, function (Faker $faker) {
    return [
        'user_id' => function() {
            return App\User::all()->random();
        }
    ];
});
