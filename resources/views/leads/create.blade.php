@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/leads/create.js') !!}" type="text/javascript"></script>
@stop

@section('title')
        Add Lead
@stop

@section('content')

    <!-- BreadCrumbs component -->
    @component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Leads','routes'=>[ ['/', 'Home'],['leads-area/leads', 'Leads'], ['leads-area/create', 'Add Lead'],]))
    @endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Forms component-->
    @component('components.forms.forms', array( 'id' => 'create-lead', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
