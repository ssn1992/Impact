@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/ebook.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Ebook
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Ebook','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/ebook', 'Insert Ebook']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-ebook', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-ebook', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
