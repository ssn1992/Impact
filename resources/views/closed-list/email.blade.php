@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/email.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Email
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Email','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/email', 'Insert Email']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-email', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-email', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
