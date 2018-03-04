@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/source.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Source
@stop

@section('content')

    <!-- BreadCrumbs component -->
    @component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Source','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/source', 'Insert Source']]))
    @endcomponent

    <div class="wrapper wrapper-content">
        <div class="row">

            <!-- Forms component-->
            @component('components.forms.forms', array( 'id' => 'insert-source', 'col' => 'col-lg-12'))
            @endcomponent

            <!-- Data tables component-->
            @component('components.data-tables.data-tables', array( 'id' => 'table-source', 'col' => 'col-lg-12'))
            @endcomponent

        </div>
    </div>

@stop
