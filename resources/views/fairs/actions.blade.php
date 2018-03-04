@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/fairs/actions.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Tradeshow Actions
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">
        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'fairs-actions-table', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop