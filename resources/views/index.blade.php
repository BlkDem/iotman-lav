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
    <script data-search-pseudo-elements defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>


    <!-- * checking and applying Application Theme via asset the specified CSS file
    * All app.css in their folders /css/ThemeFolder/app.css and default theme in /css/app.css
   -->

    <?php
    echo "<script>var _newTheme='Default'</script>";
    $_themeCss = '/css/app.css';
    $_themed = isset($_GET["theme"]);
    if ($_themed) {
        $_themeName = $_GET["theme"];
        if (file_exists(public_path('/css/' . $_themeName . '/app.css'))) {
            $_themeCss = '/css/' . $_themeName . '/app.css';
            echo "<script>_newTheme='$_themeName'</script>";
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
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->

                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>Company name
                        </h6>

                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Angular</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">React</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Vue</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Laravel</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Settings</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Help</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            info@example.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="https://umolab.ru" target="_blank">Umolab</a>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>

</html>
