@section('title', '| Create Permission')


@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Permissions','routes'=>[['/', 'Home'], ['admin-area/permissions', 'Permissions'], ['# ', 'Add']]))
@endcomponent

<div class="row">
    <div class="col-lg-6 col-centered">
        <div class="admin ibox float-e-margins m-t">
            <div class="ibox-title">
                <h5> Users Administration </h5>

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

                <h1><i class='fa fa-key'></i> Add Permission</h1>
                <br>

                {{ Form::open(array('url' => 'admin-area/permissions')) }}

                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                    {{ Form::label('name', 'Name') }}
                    {{ Form::text('name', '', array('class' => 'form-control')) }}

                    @if ($errors->has('name'))
                        <span class="help-block text-danger text-center">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div><br>
                @if(!$roles->isEmpty())
                    <h4>Assign Permission to Roles</h4>

                    @foreach ($roles as $role)
                        {{ Form::checkbox('roles[]',  $role->id ) }}
                        {{ Form::label($role->name, ucfirst($role->name)) }}<br>

                    @endforeach
                @endif
                <br>
                {{ Form::submit('Add', array('class' => 'btn btn-primary')) }}

                {{ Form::close() }}
            </div>
        </div>
    </div>
</div>

@endsection