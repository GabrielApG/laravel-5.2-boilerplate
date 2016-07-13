<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>@yield('title','Laravel 5.2')</title>
    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/app.css') }}">
    @yield('stylesheets')

</head>
<body>

    @yield('content')

    <!-- javascripts -->
    <script type="text/javascript" src="{{ asset('assets/js/all.js') }}"></script>
    @yield('javascripts')

</body>
</html>