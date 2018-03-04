@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/level.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Level
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Level','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/level', 'Insert Level']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-level', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-level', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
