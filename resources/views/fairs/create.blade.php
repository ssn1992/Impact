@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/fairs/create.js') !!}" type="text/javascript"></script>
@stop

@section('title')
        Tradeshows Add Contact
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Tradeshows','routes'=>[ ['/', 'Home'],['fairs-area/create', 'Add Contact'],]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Forms component-->
    @component('components.forms.forms', array( 'id' => 'create-fair', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
