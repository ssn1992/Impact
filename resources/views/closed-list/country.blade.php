@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/country.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Country
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Country','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/country', 'Insert Country']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-country', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
