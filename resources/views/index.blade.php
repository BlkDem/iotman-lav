<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
    <title>Umolab Devices</title>
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>
<body class="container-fluid">
<div id="app" class="container text-center m-20">
    <navbar></navbar>
    <device-list ref="DeviceRef"></device-list>
    <device-type-list ref="DeviceTypeRef"></device-type-list>
    <device-user-list ref="DeviceUserRef"></device-user-list>
    
</div>
<script src="{{ asset('js/app.js') }}"></script>

</body>
</html>