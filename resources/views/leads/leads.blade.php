@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/leads/leads.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Leads
@stop

@section('content')

<!-- Search component-->
@component('components.search.search')
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'totalLeads-table', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
