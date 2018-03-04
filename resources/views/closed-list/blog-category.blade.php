@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/closed-list/insert/blog-category.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Insert Blog Category
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Blog Category','routes'=>[ ['/', 'Home'],['admin-area/closed-list-area/blog-category', 'Insert Blog Category']]))
@endcomponent

<div class="wrapper wrapper-content">
    <div class="row">

    <!-- Forms component-->
    @component('components.forms.forms', array( 'id' => 'insert-blog-category', 'col' => 'col-lg-12'))
    @endcomponent

    <!-- Data tables component-->
    @component('components.data-tables.data-tables', array( 'id' => 'table-blog-category', 'col' => 'col-lg-12'))
    @endcomponent

    </div>
</div>

@stop
