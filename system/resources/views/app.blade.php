<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="application-name" content="{{ config('app.name') }}" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    </head>
    <body>
        <div id="app">
            <App
                app-name="{{ config('app.name') }}"
                lang="{{ str_replace('_', '-', app()->getLocale()) }}"
            ></App>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
