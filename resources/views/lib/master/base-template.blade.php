<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Webuzz Impact - @yield('title') </title>

    <!-- STYLE SECTION -->
    <link href="{!! asset('css/master/master.css') !!}" media="all" rel="stylesheet" type="text/css" />
@yield('styles')
<!-- .STYLE SECTION -->

</head>

<body>

<!-- WRAPPER-->
<div id="wrapper">

    <!-- MAIN VIEW  -->
    <div id="@yield('title')">
        @yield('content')
    </div>

</div>
<!-- .WRAPPER -->

<!-- SCRIPTS SECTION-->
@yield('scripts')
<!-- .SCRIPTS SECTION-->
</body>
</html>
