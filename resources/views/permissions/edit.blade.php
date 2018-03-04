@section('title', '| Edit Permission')

@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Permissions','routes'=>[['/', 'Home'], ['admin-area/permissions ', 'Permissions'], ['#', 'Edit']]))
@endcomponent

    <div class="row">
        <div class="col-lg-6 col-centered">
            <div class="admin ibox float-e-margins content-container m-t">
                <div class="ibox-title">
                    <h5>Edit Users Permissions </h5>

                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                        <a class="close-link">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>

                <div class="ibox-content">
                    <h1><i class='fa fa-key'></i> Edit {{$permission->name}}</h1>
                    <br>
                    {{ Form::model($permission, array('route' => array('permissions.update', $permission->id), 'method' => 'PUT')) }}{{-- Form model binding to automatically populate our fields with permission data --}}

                    <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                        {{ Form::label('name', 'Permission Name') }}
                        {{ Form::text('name', null, array('class' => 'form-control')) }}

                        @if ($errors->has('name'))
                            <span class="help-block text-danger text-center">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>
                    <br>
                    {{ Form::submit('Edit', array('class' => 'btn btn-primary')) }}

                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
@endsection