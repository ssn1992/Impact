@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/leads/manual-import-leads-dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Leads Manual Dashboard
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'manual-import-leads-table', 'col' => 'col-lg-12'))
    @endcomponent

    <!-- Graph component brand-->
    @component('components.graphs.graphs', array( 'id' => 'manual-import-dashboard-brand', 'col' => 'col-lg-12'))
    @endcomponent

    <!-- Graph component user-->
    @component('components.graphs.graphs', array( 'id' => 'manual-import-dashboard-user', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
