<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyShopifySession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->bearerToken();

        dd($token);
        if (!$token || !$this->isValidateToken($token)) {
            return response()->json(['message' => 'Session token is invalid'], 401);
        }
        return $next($request);
    }

    private function isValidateToken(string $token): bool
    {
        // return $token === 'valid_token';
        return true;
    }
}
