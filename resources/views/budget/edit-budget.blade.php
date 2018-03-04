@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/budget/edit-budget.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Budget Edit
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Budget','routes'=>[ ['/', 'Home'],['budget-area/edit-budget', 'Edit Budget'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'edit-budget', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
