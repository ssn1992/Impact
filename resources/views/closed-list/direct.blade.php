@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/direct.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Direct Contact
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Direct Contact','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/direct', 'Insert Direct Contact']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-direct', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-direct-contact', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
