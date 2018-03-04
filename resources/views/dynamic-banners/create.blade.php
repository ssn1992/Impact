@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/dynamic-banners/create.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Dynamic Banners
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Dynamic banners','routes'=>[ ['/', 'Home'],['admin-area/dynamic-banners/actions/add', 'Add Banner'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

	<!-- Graphs component-->
    @component('components.graphs.graphs', array( 'id' => 'top-banners-clicks-graph', 'col' => 'col-lg-12'))
    @endcomponent

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'totalLeads-table', 'col' => 'col-lg-6'))
    @endcomponent

    @endcomponent

    </div>
</div>

@stop