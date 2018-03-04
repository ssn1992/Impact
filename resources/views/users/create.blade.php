@section('title', 'Add User')

@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
    <script src="{!! asset('js/plugins/password-plugin/password-plugin.js') !!}" type="text/javascript"></script>
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Users','routes'=>[ ['/', 'Home'],['admin-area/users', 'Users'], ['#', 'Add']]))
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

                <h1><i class='fa fa-user-plus'></i> Add User</h1>
                <hr>

                {{ Form::open(array('url' => 'admin-area/users')) }}

                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                    {{ Form::label('name', 'Name') }}
                    {{ Form::text('name', '', array('class' => 'form-control')) }}

                    @if ($errors->has('name'))
                        <span class="help-block text-danger text-center">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    {{ Form::label('email', 'Email') }}
                    {{ Form::email('email', '', array('class' => 'form-control')) }}

                    @if ($errors->has('email'))
                        <span class="help-block text-danger text-center">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>



                <div class='form-group'>
                    @foreach ($roles as $role)
                        {{ Form::checkbox('roles[]',  $role->id ) }}
                        {{ Form::label($role->name, ucfirst($role->name)) }}<br>

                    @endforeach
                </div>

                <div class="form-group{{ $errors->has('brand_id') ? ' has-error' : '' }}">
                    {{ Form::label('brand_id', 'Brand') }}
                    {{ Form::select('brand_id', $brands, null, ['class' => 'form-control']) }}

                    @if ($errors->has('brand'))
                        <span class="help-block text-danger text-center">
                            <strong>{{ $errors->first('brand_id') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="row" id="pwd-container">
                    <div class="col-sm-12">
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            {{ Form::label('password', 'Password') }}<br>
                            {{ Form::text('password', '', array('class' => 'form-control')) }}

                            @if ($errors->has('password'))
                                <span class="help-block text-danger text-center">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group">
                            <div class="pwstrength_viewport_progress"></div>
                        </div>
                    </div>
                </div>

                <div class="row" id="pwd-container-confirm">
                    <div class="col-sm-12">
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            {{ Form::label('password_confirmation', 'Confirm Password') }}<br>
                            {{ Form::text('password_confirmation', '', array('class' => 'form-control')) }}
                            @if ($errors->has('password'))
                                <span class="help-block text-danger text-center">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group">
                            <div class="pwstrength_viewport_progress_confirm"></div>
                        </div>
                    </div>
                </div>

                {{ Form::submit('Add', array('class' => 'btn btn-primary')) }}

                {{ Form::close() }}
            </div>
        </div>
    </div>
</div>
@endsection