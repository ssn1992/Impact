@section('title', 'Console')

@extends('lib.master.main')

@section('styles')
    <link href="{!! asset('css/plugins/codemirror/codemirror.css') !!}" media="all" rel="stylesheet" type="text/css" />
    <link href="{!! asset('css/plugins/codemirror/material.css') !!}" media="all" rel="stylesheet" type="text/css" />
@stop

@section('scripts')
    <script src="{!! asset('js/plugins/codemirror/codemirror.js') !!}" type="text/javascript"></script>
    <script src="{!! asset('js/plugins/codemirror/mode/shell/shell.js') !!}" type="text/javascript"></script>
    <script src="{!! asset('js/console/console.js') !!}" type="text/javascript"></script>
    <script src="{!! asset('js/ladda/spin.min.js') !!}" type="text/javascript"></script>
    <script src="{!! asset('js/ladda/ladda.min.js') !!}" type="text/javascript"></script>
    <script src="{!! asset('js/ladda/ladda.jquery.min.js') !!}" type="text/javascript"></script>
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Console','routes'=>[ ['/', 'Home'],['admin-area/console', 'Console'],]))
@endcomponent

<!-- Console component -->
@component('components.console.console', array( 'id' => 'console', 'col' => 'col-lg-12'))
@endcomponent

@endsection