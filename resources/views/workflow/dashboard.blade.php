@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/workflow/dashboard.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Leads
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Workflow','routes'=>[ ['/', 'Home'],['workflow', 'Websites Workflow'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Workflow component -->
        @component('components.workflow.workflow', array( 'id' => 'workflow-dashboard', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
