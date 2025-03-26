<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  null  $permission
     * @return mixed
     */
    public function handle($request, Closure $next, $role, $permission = null)
    {
        if (! Auth::user()->hasRole($role)) {
            abort(403);
        }
        if ($permission !== null && ! Auth::user()->can($permission)) {
            abort(403);
        }

        return $next($request);
    }
}
