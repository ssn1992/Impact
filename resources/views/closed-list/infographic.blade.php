@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/infographic.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Infographic
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Infographic','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/infographic', 'Insert Infographic']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-infographic', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-infographic', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
