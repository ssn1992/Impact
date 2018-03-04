@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/bug-report/dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Bug Report
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Bug Report','routes'=>[ ['/', 'Home'],['admin-area/bug-report/dashboard', 'Bug Report'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'bug-report-table', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
