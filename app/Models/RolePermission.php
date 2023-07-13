<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class RolePermission extends Model
{
    use HasFactory;

    protected $table = "roles_perimissions";

    protected $fillable = ['permission_id', 'role_id'];

    public static function rolePermissionsWhereUserID($role_id)
    {
        return DB::table('roles_permissions')
            ->join('roles', 'roles.id', '=', 'roles_permissions.role_id')
            ->join('permissions', 'permissions.id', '=', 'roles_permissions.permission_id')
            ->select(
                'roles.id as role_id',
                'permissions.id as permission_id',
                'roles.name as role_name',
                'roles.slug as role_slug',
                'roles_permissions.created_at as created_at',
                'roles_permissions.updated_at as updated_at',
            )
            ->where('role_id', $role_id);
    }

    public static function rolePermissionsLookup()
    {
        return DB::table('roles_permissions')
            ->join('roles', 'roles.id', '=', 'roles_permissions.role_id')
            ->join('permissions', 'permissions.id', '=', 'roles_permissions.permission_id')
            ->select(
                'roles.id as role_id',
                'permissions.id as permission_id',
                'roles.name as role_name',
                'roles.slug as role_slug',
                'roles_permissions.created_at as created_at',
                'roles_permissions.updated_at as updated_at',
            );
    }




}
