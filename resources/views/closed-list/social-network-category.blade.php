@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/social-network-category.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Social Network Category
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Social Network Category','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/social-network-category', 'Insert Social Network Category']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-social-network-category', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-social-network-category', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
