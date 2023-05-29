<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UserRole extends Model
{
    use HasFactory;

    protected $table = "users_roles";

    public static function userRolesWhereUserID($user_id)
    {
        return DB::table('users_roles')
            ->join('roles', 'roles.id', '=', 'users_roles.role_id')
            ->select(
                'users_roles.id as id',
                'users_roles.user_id as user_id',
                'roles.id as role_id',
                'roles.name as name',
                'roles.slug as slug',
                'users_roles.created_at as created_at',
                'users_roles.updated_at as updated_at',
            )
            ->where('user_id', $user_id);
    }

    public static function userRolesLookup()
    {
        return DB::table('users_roles')
            ->join('roles', 'roles.id', '=', 'users_roles.role_id')
            ->select(
                'users_roles.id as id',
                'users_roles.user_id as user_id',
                'roles.id as role_id',
                'roles.name as name',
                'roles.slug as slug',
                'users_roles.created_at as created_at',
                'users_roles.updated_at as updated_at',
            )
            // ->where('user_id', $user_id)
            ;
    }

}
