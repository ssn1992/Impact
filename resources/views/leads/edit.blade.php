@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/leads/manual-import-edit-leads.js') !!}" type="text/javascript"></script>
@stop

@section('title')
        Edit Lead Manual
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Leads','routes'=>[ ['/', 'Home'],['leads-area/manual-import-leads', 'Leads Manual'], ['leads-area/edit', 'Edit Lead'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Forms component-->
    @component('components.forms.forms', array( 'id' => 'edit-lead', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
