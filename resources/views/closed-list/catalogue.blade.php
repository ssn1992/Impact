@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/catalogue.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Catalogue
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Catalogue','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/catalogue', 'Insert Catalogue']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-catalogue', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-catalogue', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
