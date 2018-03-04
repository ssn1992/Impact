@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/social-network.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Social Network
@stop

@section('content')

    <!-- BreadCrumbs component -->
    @component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Social Network','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/social-network', 'Insert Social Network']]))
    @endcomponent

    <div class="wrapper wrapper-content">
        <div class="row">

            <!-- Forms component-->
            @component('components.forms.forms', array( 'id' => 'insert-social-network', 'col' => 'col-lg-12'))
            @endcomponent

            <!-- Data tables component-->
            @component('components.data-tables.data-tables', array( 'id' => 'table-social-network', 'col' => 'col-lg-12'))
            @endcomponent

        </div>
    </div>

@stop
