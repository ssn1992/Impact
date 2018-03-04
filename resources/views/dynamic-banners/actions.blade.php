@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/dynamic-banners/actions.js') !!}" type="text/javascript"></script>
@stop

@section('title')
        Dynamic Banners
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Dynamic banners','routes'=>[ ['/', 'Home'],['admin-area/dynamic-banners/actions', 'Banners']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

	<!-- Graphs component-->
    @component('components.graphs.graphs', array( 'id' => 'top-banners-clicks-graph', 'col' => 'col-lg-6'))
    @endcomponent

    <!-- Graphs component-->
    @component('components.graphs.graphs', array( 'id' => 'top-banners-clicks-graph-doughnut', 'col' => 'col-lg-6'))
    @endcomponent

    <!-- Forms component-->
    @component('components.forms.forms', array( 'id' => 'dynamic-banners-table', 'col' => 'col-lg-12'))
    @endcomponent


    </div>
</div>

@stop