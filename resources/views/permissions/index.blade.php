@section('title', '| Edit Permission')

@extends('lib.master.main')

@section('styles')
@stop

@section('scripts')
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Permissions','routes'=>[['/', 'Home'], ['admin-area/permissions', 'Permissions']]))
@endcomponent

<div class="row">
    <div class="col-lg-12">
        <div class="admin ibox float-e-margins m-t">
            <div class="ibox-title">
                <h5> Users Permissions </h5>

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
                <h1>
                    <i class="fa fa-key"></i>Available Permissions
                </h1>
                <hr>
                <div class="table-responsive">
                    <table class="table table-striped">

                        <thead>
                        <tr>
                            <th>Permissions</th>
                            <th>Operation</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($permissions as $permission)
                            <tr>
                                <td>{{ $permission->name }}</td>
                                <td>
                                    <a href="{{ URL::to('admin-area/permissions/'.$permission->id.'/edit') }}" class="btn btn-info pull-left" style="margin-right: 3px;">Edit <i class="fa fa-pencil"></i></a>

                                    {!! Form::open(['method' => 'DELETE', 'route' => ['permissions.destroy', $permission->id] ]) !!}
                                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                                    {!! Form::close() !!}

                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>

                <a href="{{ URL::to('admin-area/permissions/create') }}" class="btn btn-primary">Add Permission <i class="fa fa-plus"></i></a>
            </div>
        </div>
    </div>
</div>

@endsection


