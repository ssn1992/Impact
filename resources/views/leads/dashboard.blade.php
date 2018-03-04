@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/leads/dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Leads
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<!-- Highlights component-->
@component('components.highlights.highlights', array( 'id' => 'leads-highlights', 'col' => 'col-lg-12'))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Graphs component-->
    @component('components.graphs.graphs', array( 'id' => 'totalLeads-graph', 'col' => 'col-lg-6'))
    @endcomponent

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'totalLeads-table', 'col' => 'col-lg-6'))
    @endcomponent

    <!-- Maps component-->
    @component('components.maps.maps', array( 'id' => 'totalLeads-map', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
