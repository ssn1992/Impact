@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/advertising.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Advertising
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Advertising','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/advertising', 'Insert Advertising']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Forms component-->
    @component('components.forms.forms', array( 'id' => 'insert-advertising', 'col' => 'col-lg-12'))
    @endcomponent

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'table-advertising', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
