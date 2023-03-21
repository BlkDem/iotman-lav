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
    <!-- <script data-search-pseudo-elements defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

    <!-- * checking and applying Application Theme via asset the specified CSS file
    * All app.css in their folders /css/ThemeFolder/app.css and default theme in /css/app.css
   -->

    <?php
    // echo "<script>var _newTheme='Default'</script>";
    // $_themeCss = '/css/slate/app.css';

    // if (isset($_GET["theme"])) {
    //     $_themeName = $_GET["theme"];
    //     if (file_exists(public_path('/css/' . $_themeName . '/app.css'))) {
    //         $_themeCss = '/css/' . $_themeName . '/app.css';
    //         // echo("<h1 style='position: absolute; z-index: 1034;'>$_themeCss</h1>");
    //         echo "<script>_newTheme='$_themeName'</script>";
    //     }
    // }
    ?>

    <?php
        $_themeCss = '/css/slate/app.css';
    ?>

    <link rel="stylesheet" id="themeCss" href="{{ asset($_themeCss) }}">
    <style>
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-thumb {
            /* border-radius: 30px; */
            background: -webkit-gradient(linear, left top, left bottom, from(var(--bs-primary)), to(var(--bs-secondary)));
            /* background: -webkit-gradient(linear-gradient(0, var(--bs-secondary), 0%, var(--bs-secondary), 50%, var(--bs-primary), 100%)); */
            /* background: -webkit-gradient(linear-gradient(90deg, rgba(var(--bs-primary),1) 0%, rgba(var(--bs-secondary),1) 50%, rgba(var(--bs-rpimary),1) 100%)); */
            /* box-shadow: inset 2px 2px 2px rgba(var(--bs-light),.25), inset -2px -2px 2px rgba(var(--bs-dark),.25); */
        }

        ::-webkit-scrollbar-track {
            background-color: var(--bs-light);
            border-radius: 10px;
            /* background: linear-gradient(to right, rgba(var(--bs-light),.25), rgba(var(--bs-light),.25) 1px,
          rgba(var(--bs-light),.25) 1px, rgba(var(--bs-light),.25)); */
        }
    </style>
</head>

<body class="container-fluid">
    <div id="app" class="container">

        <!-- <device-list ref="DeviceRef"></device-list> -->
        <!-- <device-type-list ref="DeviceTypeRef"></device-type-list>
        <device-user-list ref="DeviceUserRef"></device-user-list> -->
    </div>

    <!-- Footer -->
    <footer class="text-center text-lg-start text-muted">
        <!-- Section: Social media -->
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <!-- Left -->

            <!-- Right -->
        </section>
        <!-- Section: Social media -->



        <!-- Section: Links  -->
        <section class="mx-4 my-4" style="display: flex; justify-content: center;">
        <object type="image/svg+xml" data="images/logo/u-logo2.svg" id="object_1" class="icon logo"
                            style="width: 120px;">
                        </object>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <!-- <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="https://umolab.ru" target="_blank">Umolab</a>
        </div> -->
        <!-- Copyright -->
    </footer>
    <!-- Footer -->
    <style>
        .hide {
            display: none;
        }
    </style>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>

</html>
