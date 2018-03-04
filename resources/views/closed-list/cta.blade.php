@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/cta.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Cta
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Cta','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/form', 'Insert Cta']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-cta', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-cta', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
