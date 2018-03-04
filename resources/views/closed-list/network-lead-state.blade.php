@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/network-lead-state.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Network State
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Network State','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/network-lead-state', 'Insert Network Lead State']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-network-lead-state', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-network-lead-state', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
