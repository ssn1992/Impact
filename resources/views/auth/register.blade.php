@extends('lib.master.base-template')

@section('title')
    404 Unauthorized
@stop

<body class="gray-bg">


<div class="middle-box text-center animated fadeInDown">
    <h1>404</h1>
    <h3 class="font-bold">Not Found</h3>

    <div class="error-desc">
        The page cannot be found
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        <div class="m-t">
            <a href="{{ url("/") }}"><button type="submit" class="btn btn-primary">Home</button></a>
        </div>
    </div>
</div>
