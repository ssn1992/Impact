@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/plattform.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Plattform
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Plattform','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/plattform', 'Insert Plattform']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-plattform', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-plattform', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
