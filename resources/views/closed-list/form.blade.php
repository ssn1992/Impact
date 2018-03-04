@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/form.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Form
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Form','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/form', 'Insert Form']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-form', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-form', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
