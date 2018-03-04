@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/ebook-category.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Ebook Category
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Ebook Category','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/ebook-category', 'Insert Ebook Category']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

        <!-- Forms component-->
        @component('components.forms.forms', array( 'id' => 'insert-ebook-category', 'col' => 'col-lg-12'))
        @endcomponent

        <!-- Data tables component-->
        @component('components.data-tables.data-tables', array( 'id' => 'table-ebook-category', 'col' => 'col-lg-12'))
        @endcomponent
    </div>
</div>

@stop
