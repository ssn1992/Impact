@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/website.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Website
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Website','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/website', 'Insert Website']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-website', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-website', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
