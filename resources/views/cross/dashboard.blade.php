@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/cross/dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Leads
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">
        <div id="cross-dashboard">
            <!-- Graphs components-->
            @component('components.graphs.graphs', array( 'id' => 'cross-found-user-graph', 'secondaryId' => 'cross-found-user-graph', 'col' => 'col-lg-6'))
            @endcomponent

            @component('components.graphs.graphs', array( 'id' => 'cross-notFound-graph', 'secondaryId' => 'cross-notFound-graph', 'col' => 'col-lg-6'))
            @endcomponent

            @component('components.graphs.graphs', array( 'id' => 'cross-found-general-graph', 'secondaryId' => 'cross-found-general-graph', 'col' => 'col-lg-12'))
            @endcomponent

            @component('components.graphs.graphs', array( 'id' => 'cross-found-users-graph', 'secondaryId' => 'cross-found-users-graph', 'col' => 'col-lg-12'))
            @endcomponent

            <!-- Data tables component-->
            @component('components.data-tables.data-tables', array( 'id' => 'cross-table-dashboard', 'col' => 'col-lg-12'))
            @endcomponent
        </div>
    </div>
</div>

@stop
