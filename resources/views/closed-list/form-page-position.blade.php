@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/form-page-position.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Form Page Position
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Form Page Position','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/form-page-position', 'Insert Form Page Position']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-form-page-position', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-form-page-position', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
