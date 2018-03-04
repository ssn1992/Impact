@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/brands-access.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Brands Access
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Brands','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/brands-access', 'Insert Brands Access']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-brands-access', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-brands-access', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop