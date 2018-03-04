<?php
/**
 * To use this module use like:
 *
 * Main Section
 * @extends('lib.master.main')
 *
 * Style Section
 * @section('styles')
 * @stop
 *
 * Scripts Section
 * @section('scripts')
 * @stop
 *
 * Title Section
 * @section('title')
 * @stop
 *
 * Content Section
 * @section('content')
 * @stop
 */
?>

        <!doctype html>
<html lang="{{ config('app.locale') }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Webuzz Impact - @yield('title') </title>

    {{-- STYLE SECTION --}}
    <link href="{!! asset('css/master/master.css') !!}" media="all" rel="stylesheet" type="text/css" />
    @yield('styles')
    {{-- .STYLE SECTION --}}
</head>

<body>

{{-- WRAPPER --}}
<div id="wrapper">

    <!-- NAVIGATION -->
    @include('lib.master.navigation')

    {{-- PAGE WRAPPER --}}
    <div id="page-wrapper" class="gray-bg">

        {{-- TOP NAVBAR --}}
        @include('lib.master.topnavbar')

        {{-- MAIN VIEW  --}}
        <div id="@yield('title')" style="padding-bottom: 50px">
            @yield('content')
        </div>
        {{-- .MAIN VIEW  --}}

        {{-- FOOTER --}}
        @include('lib.master.footer')
        {{-- .FOOTER --}}

    </div>
    {{-- .PAGE WRAPPER --}}

</div>
{{-- .WRAPPER --}}

{{-- Template config --}}
@component('lib.master.template-config')
@endcomponent
{{-- .Template config --}}

{{-- SCRIPTS SECTION --}}
<script src="{!! asset('js/master/master.js') !!}" type="text/javascript"></script>
<script>
    window.Grants =
    <?php echo json_encode([
        'csrfToken' => csrf_token(),
        'userId'    => Auth::user()->id,
        'roles'     => Auth::user()->getRoleNames()->first(),
        'brand'     => Auth::user()->brand_id
    ]);
    ?>
</script>

<script src="{!! asset('js/ladda/spin.min.js') !!}" type="text/javascript"></script>
<script src="{!! asset('js/ladda/ladda.min.js') !!}" type="text/javascript"></script>
<script src="{!! asset('js/ladda/ladda.jquery.min.js') !!}" type="text/javascript"></script>
@yield('scripts')
<!-- .SCRIPTS SECTION-->
</body>
</html>
