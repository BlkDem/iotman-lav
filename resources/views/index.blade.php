<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        window.Laravel = {
            csrfToken: '{{ csrf_token() }}'
        }
    </script>
    <title>Umolab Devices</title>

</head>

<body class="container-fluid" style="box-sizing: border-box;">

        <!-- vue mount point -->
    <div id="app" class="container font-0_9" >

    </div>

    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>
