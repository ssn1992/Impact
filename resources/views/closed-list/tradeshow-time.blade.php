@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/tradeshow-time.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Tradeshow Time
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Tradeshow Time','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/tradeshow-time', 'Insert Tradeshow Time']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-tradeshow-time', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-tradeshow-time', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
