@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/lead-token.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Lead Token
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Lead Token','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/lead-token', 'Insert Lead Token']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-lead-token', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-lead-token', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
