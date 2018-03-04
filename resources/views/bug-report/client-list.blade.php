@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/bug-report/client-list.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Bug Report List
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Bug Report','routes'=>[ ['/', 'Home'],['personal-area/bug-report', 'Bug Report'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'bug-report-client-table', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
