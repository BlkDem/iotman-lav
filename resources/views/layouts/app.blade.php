<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <script data-search-pseudo-elements defer
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>


    <!-- * checking and applying Application Theme via asset the specified CSS file
    * All app.css in their folders /css/ThemeFolder/app.css and default theme in /css/app.css
   -->

    <?php
      echo "<script>var _currentTheme=''</script>";
      $_themeCss = '/css/app.css';
      $_themed = isset($_GET["theme"]);
      if ($_themed)
      {
        $_themeName = $_GET["theme"];
        if(file_exists(public_path('/css/' . $_themeName. '/app.css')))
        {
          $_themeCss = '/css/' . $_themeName. '/app.css';
          echo "<script>_currentTheme='$_themeName'</script>";
        }
      }
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

    </style>

    <!-- Scripts -->

</head>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
            </div>
        </nav>

        <main class="vh-100">
            <div class="col-md-8">
                @yield('content')
            </div>
        </main>
    </div>
</body>

</html>
