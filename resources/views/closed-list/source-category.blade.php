@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/source-category.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Source Category
@stop

@section('content')

    <!-- BreadCrumbs component -->
    @component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Source Category','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/source-category', 'Insert Source Category']]))
    @endcomponent

    <div class="wrapper wrapper-content">
        <div class="row">

            <!-- Forms component-->
            @component('components.forms.forms', array( 'id' => 'insert-source-category', 'col' => 'col-lg-12'))
            @endcomponent

            <!-- Data tables component-->
            @component('components.data-tables.data-tables', array( 'id' => 'table-source-category', 'col' => 'col-lg-12'))
            @endcomponent

        </div>
    </div>

@stop
