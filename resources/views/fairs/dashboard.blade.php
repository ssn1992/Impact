@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/fairs/dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Tradeshow Dashboard
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Graphs component-->
        @component('components.graphs.graphs', array( 'id' => 'fairs-graph', 'col' => 'col-lg-12'))
        @endcomponent

        @if(false)
        <!-- Graphs component-->
        @component('components.graphs.graphs', array( 'id' => 'fairs-graph-client-type', 'col' => 'col-lg-12'))
        @endcomponent
        @endif

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'fairs-table', 'col' => 'col-lg-12'))
        @endcomponent

        @if(false)
        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'fairs-client-common-table', 'col' => 'col-lg-12'))
        @endcomponent
        @endif
    </div>
</div>

@stop
