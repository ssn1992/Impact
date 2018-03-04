@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/phone.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Phone
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Phone','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/phone', 'Insert Phone']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-phone', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-phone', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
