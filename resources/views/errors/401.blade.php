@extends('lib.master.base-template')

@section('title')
    401 Unauthorized
@stop

<body class="gray-bg">


<div class="middle-box text-center animated fadeInDown">
    <h1>401</h1>
    <h3 class="font-bold">Unauthorized</h3>

    <div class="error-desc">
        The request has not been applied because it lacks valid authentication credentials for the target resource.
        <div class="m-t">
            <a href="{{ url("/") }}"><button type="submit" class="btn btn-primary">Home</button></a>
        </div>
    </div>
</div>
