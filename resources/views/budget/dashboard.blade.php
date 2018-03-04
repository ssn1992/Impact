@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/budget/dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Budget Dashboard
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Graphs component-->
    @component('components.graphs.graphs', array( 'id' => 'budget-graph', 'col' => 'col-lg-12'))
    @endcomponent

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'budget-table', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
