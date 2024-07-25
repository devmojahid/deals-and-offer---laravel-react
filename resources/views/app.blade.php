<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta name="description" content="{{ config('app.name', 'Laravel') }}">
    <meta name="author" content="">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    {{-- <script src="https://unpkg.com/@shopify/app-bridge@1.30.0/umd/index.js"></script>
    <script>
        window.appBridge = window['app-bridge'];
        window.actions = window.appBridge.actions;
    </script> --}}

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.js', 'resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia

    <input type="hidden" id="apiKey" value="{{ config('shopify-app.api_key') }}">
    <input type="hidden" id="shopOrigin" value="{{ Auth::user()->name }}">
    <input type="hidden" id="host" value="{{ request('host') }}">
</body>

</html>
