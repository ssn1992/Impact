@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/budget/insert-budget.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Budget Insert
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Budget','routes'=>[ ['/', 'Home'],['budget-area/insert-budget', 'Insert Budget'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-budget', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
