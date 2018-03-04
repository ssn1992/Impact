@section('title', '| Edit Role')

@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Roles','routes'=>[['/', 'Home'], ['admin-area/roles', 'Roles'], ['#', 'Edit']]))
@endcomponent

<div class="row">
    <div class="col-lg-6 col-centered">
        <div class="admin ibox float-e-margins m-t">
            <div class="ibox-title">
                <h5> Users Roles </h5>

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
                <h1><i class='fa fa-newspaper-o'></i> Edit Role: {{$role->name}}</h1>
                <hr>

                {{ Form::model($role, array('route' => array('roles.update', $role->id), 'method' => 'PUT')) }}

                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                    {{ Form::label('name', 'Role Name') }}
                    {{ Form::text('name', null, array('class' => 'form-control')) }}

                    @if ($errors->has('name'))
                        <span class="help-block text-danger text-center">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>

                <h5><b>Assign Permissions</b></h5>

                <div class="form-group{{ $errors->has('permissions') ? ' has-error' : '' }}">
                    @foreach ($permissions as $permission)

                        {{Form::checkbox('permissions[]',  $permission->id, $role->permissions ) }}
                        {{Form::label($permission->name, ucfirst($permission->name)) }}<br>

                    @endforeach

                    @if ($errors->has('permissions'))
                        <span class="help-block text-danger text-center">
                            <strong>{{ $errors->first('permissions') }}</strong>
                        </span>
                    @endif
                    <br>
                    {{ Form::submit('Edit', array('class' => 'btn btn-primary')) }}

                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
