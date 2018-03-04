@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/showroom.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Showroom
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Showroom','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/showroom', 'Insert Showroom']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-showroom', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-showroom', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
