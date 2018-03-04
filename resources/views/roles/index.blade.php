@section('title', '| Roles')

@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Roles','routes'=>[['/', 'Home'], ['admin-area/roles', 'Roles']]))
@endcomponent

<div class="row">
    <div class="col-lg-12">
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
                <h1><i class="fa fa-newspaper-o"></i> Roles
                </h1>
                <hr>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Role</th>
                            <th>Permissions</th>
                            <th>Operation</th>
                        </tr>
                        </thead>

                        <tbody>
                        @foreach ($roles as $role)
                            <tr>

                                <td>{{ $role->name }}</td>

                                <td>{{ str_replace(array('[',']','"'),'', $role->permissions()->pluck('name')) }}</td>{{-- Retrieve array of permissions associated to a role and convert to string --}}
                                <td>
                                    <a href="{{ URL::to('admin-area/roles/'.$role->id.'/edit') }}" class="btn btn-info pull-left" style="margin-right: 3px;">Edit <i class="fa fa-pencil"></i></a>

                                    {!! Form::open(['method' => 'DELETE', 'route' => ['roles.destroy', $role->id] ]) !!}
                                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                                    {!! Form::close() !!}

                                </td>
                            </tr>
                        @endforeach
                        </tbody>

                    </table>
                </div>

                <a href="{{ URL::to('admin-area/roles/create') }}" class="btn btn-primary">Add Role <i class="fa fa-plus"></i></a>
            </div>
        </div>
    </div>
</div>

@endsection