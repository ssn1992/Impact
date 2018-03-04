<?php
//@component('components.breadcrumbs.breadcrumbs', array('tittle' => 'tittle', 'routes'=>[[url, 'name'],['url', 'name']..]))
?>
<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-10">
        <h2>{{ $tittle  }}</h2>
        <ol class="breadcrumb">
            @foreach($routes as $key => $route)
                <li @if (request()->is($route[0]))class="active"@endif>

                    <a href="{{ url( $route[0] ) }}">
                        @if ( $route[1] == end($routes)[1])
                            <strong> {{ $route[1] }} </strong>
                        @else
                            {{ $route[1] }}
                        @endif
                    </a>
                </li>
            @endforeach
        </ol>
    </div>
</div>
