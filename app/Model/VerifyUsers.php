<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class VerifyUsers extends Model
{
    public $timestamps = false;

    protected $fillable = ['user_id', 'token'];
}
