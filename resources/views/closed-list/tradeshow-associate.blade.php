@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/tradeshow-associate.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Tradeshow Associate
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Tradeshow Associate','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/tradeshow-associate', 'Tradeshow Associate']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-tradeshow-associate', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-tradeshow-associate', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
