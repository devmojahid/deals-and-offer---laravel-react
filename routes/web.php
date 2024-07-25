<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['verify.shopify'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('home');

    Route::get('/settings', function () {
        return Inertia::render('Settings');
    })->name('settings');
});
