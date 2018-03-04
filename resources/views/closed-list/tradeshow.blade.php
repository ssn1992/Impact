@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/tradeshow.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Tradeshow
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Tradeshow','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/tradeshow', 'Insert Tradeshow']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-tradeshow', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-tradeshow', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
