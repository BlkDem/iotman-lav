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
    <script data-search-pseudo-elements defer
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>


    <!-- * checking and applying Application Theme via asset the specified CSS file
    * All app.css in their folders /css/ThemeFolder/app.css and default theme in /css/app.css
   -->

    <?php
      $_themeCss = '/css/slate/app.css';
    ?>

    <link rel="stylesheet" href="{{ asset($_themeCss) }}">
    <style>
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-thumb {
            /* border-radius: 30px; */
            background: -webkit-gradient(linear, left top, left bottom, from(var(--bs-primary)), to(var(--bs-secondary)));
            /* background: -webkit-gradient(linear-gradient(0, var(--bs-secondary), 0%, var(--bs-secondary), 50%, var(--bs-primary), 100%)); */
            /* background: -webkit-gradient(linear-gradient(90deg, rgba(var(--bs-primary),1) 0%, rgba(var(--bs-secondary),1) 50%, rgba(var(--bs-rpimary),1) 100%)); */
            /* box-shadow: inset 2px 2px 2px rgba(var(--bs-light),.25), inset -2px -2px 2px rgba(var(--bs-dark),.25);*/
        }

        ::-webkit-scrollbar-track {
            background-color: var(--bs-light);
            border-radius: 10px;
            /* background: linear-gradient(to right, rgba(var(--bs-light),.25), rgba(var(--bs-light),.25) 1px,
          rgba(var(--bs-light),.25) 1px, rgba(var(--bs-light),.25)); */
        }

        .data-in-center {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

    </style>
</head>

<body class="container-fluid">
    <div id="app" class="container m-20">
        <!-- <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Umolab') }}
                </a>
            </div>
        </nav>
        <main class="vh-100">
            <div class="container vh-100 data-in-center">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        @yield('content')
                    </div>
                </div>
            </div>
        </main> -->

    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
