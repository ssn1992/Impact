@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/fairs/fairs.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Tradeshow

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

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
