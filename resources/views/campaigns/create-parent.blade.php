@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/campaigns/create-parent.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Create Parent Campaign
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Campaigns','routes'=>[ ['/', 'Home'],['campaigns-area/dashboard', 'Dashboard'], ['campaigns-area/create/parent', 'Create Parent Campaign'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'create-parent', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
