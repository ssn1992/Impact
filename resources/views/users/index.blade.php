@section('title', 'Users')

@extends('lib.master.main')

@section('styles')
    <style>
        .dataTables_scrollBody {
            margin-top: -23px;
        }

    </style>
@stop

@section('scripts')
    <script>
        $(document).ready(function(){
            var table = $('.table-striped').DataTable({
                dom: 'Bfrtip',
                sScrollX: "100%",
                stateSave: true,
                colReorder: true,
                order: [[ 0, 'desc' ]],
                lengthMenu: [
                    [ 10, 25, 50, -1 ],
                    [ '10 rows', '25 rows', '50 rows', 'Show all' ]
                ],
                buttons: [
                    {extend: 'pageLength', text: '<i class="material-icons">&#xE896;</i>',},
                    {extend: 'excelHtml5', text: '<i class="icon-excel"></i>', exportOptions: {columns: ':visible'}},
                    {extend: 'colvis', text: '<i class="material-icons">visibility</i>', postfixButtons: ['colvisRestore']},
                    {text: '<i class="material-icons">settings_backup_restore</i>', action : function () { $('.table-striped').colReorder.reset(); },}
                ],
                oLanguage: {
                    oPaginate:
                        {
                            "sNext": '<i class="material-icons">chevron_right</i>',
                            "sPrevious": '<i class="material-icons">chevron_left</i>'
                        }
                },
                initComplete: function () {
                    $('#isLoading').hide();

                    $('.load-content').fadeIn();
                },
            });

            table
                .column( '0:visible' )
                .order( 'asc' )
                .draw();
        });
    </script>
@stop

@section('content')

<!-- BreadCrumbs component -->
@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'Users','routes'=>[ ['/', 'Home'],['admin-area/users', 'Users'],]))
@endcomponent

<div class="row" style="padding-bottom: 50px">
    <div class="col-lg-12">
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
                <h1>
                    <i class="fa fa-users"></i> Users Administration
                </h1>
                <hr>

                <!-- Loader -->
                <div id="isLoading">
                    <div>
                        <div class="vue-simple-spinner"></div>
                    </div>
                </div>

                <div id="table_wrapper" class="table-responsive">
                    <table class="table table-striped mdl-data-table display nowrap mdl-typography--text-center" cellspacing="0" width="100%">

                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date/Time Added</th>
                            <th>Brand</th>
                            <th>User Roles</th>
                            <th>Operations</th>
                        </tr>
                        </thead>

                        <tbody style="display: none;" class="load-content">
                        @foreach ($users as $user)
                            <tr>

                                <td>{{ $user->id}}</td>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->email }}</td>
                                <td>{{ $user->created_at->format('F d, Y h:ia') }}</td>
                                <td>{{ $user->brand->name }}</td>
                                <td>{{ $user->roles()->pluck('name')->implode(' ') }}</td>{{-- Retrieve array of roles associated to a user and convert to string --}}
                                <td class="col-lg-2">
                                    <a href="{{ route('users.edit', $user->id) }}" class="btn btn-info pull-left" style="color: #fff; margin-right: 3px;">Edit <i class="fa fa-pencil"></i></a>

                                    {!! Form::open(['method' => 'DELETE', 'route' => ['users.destroy', $user->id] ]) !!}

                                    @if ($user->id != 1 && Auth::user()->id != $user->id)
                                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                                    @endif

                                    {!! Form::close() !!}
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>

                </div>

                <a href="{{ route('users.create') }}" class="btn btn-primary">Add User <i class="fa fa-plus"></i></a>
            </div>
        </div>
    </div>
</div>

@endsection