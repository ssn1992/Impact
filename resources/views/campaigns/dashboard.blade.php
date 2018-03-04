@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/campaigns/dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Campaigns
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'campaigns-table', 'col' => 'col-lg-12'))
    @endcomponent

    <!-- Graphs component-->
    @component('components.graphs.graphs', array( 'id' => 'campaigns-graph', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
