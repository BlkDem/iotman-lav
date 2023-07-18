<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Auth\Role;

class UserRole extends Model
{
    use HasFactory;

    protected $table = "users_roles";

    protected $fillable = ['user_id', 'role_id'];

    public static function userRolesWhereUserID($user_id)
    {
        return DB::table('users_roles')
            ->join('roles', 'roles.id', '=', 'users_roles.role_id')
            ->join('users', 'users.id', '=', 'users_roles.user_id')
            ->select(
                'users_roles.id as id',
                'users_roles.user_id as user_id',
                'users.name as user_name',
                'roles.id as role_id',
                'roles.name as role_name',
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
                'roles.name as role_name',
                'roles.slug as slug',
                'users_roles.created_at as created_at',
                'users_roles.updated_at as updated_at',
            )
            // ->where('user_id', $user_id)
            ;
    }

    public function users()
    {
        return $this->hasMany(User::class,'users', 'id', 'user_id');
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id', 'role_id');
    }




}
