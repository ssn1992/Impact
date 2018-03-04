@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/network-category.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Network Category
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Network Category','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/network-category', 'Insert Network Category']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-network-category', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-network-category', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
