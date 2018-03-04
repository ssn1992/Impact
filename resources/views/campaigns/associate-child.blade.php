@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/campaigns/associate-child.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Create Child Campaign
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Campaigns','routes'=>[ ['/', 'Home'],['campaigns-area/dashboard', 'Dashboard'], ['campaigns-area/create/association', 'Associate Child Campaign'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'associate-child', 'col' => 'col-lg-12'))
        @endcomponent

    </div>
</div>

@stop
