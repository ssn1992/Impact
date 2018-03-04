@extends('lib.master.base-template')

@section('scripts')
    <script src="{!! asset('js/master/master.js') !!}" type="text/javascript"></script>
@stop

@section('title')
    Reset Password
@endsection

@section('content')

<body class="gray-bg">
    <div class="passwordBox animated fadeInDown">
        <div class="row">
            <div class="col-md-12">
                <div class="ibox-content">

                    <h2 class="font-bold">Reset password</h2>

                    <p>
                        Enter your email address and your new password
                    </p>

                    <div class="row">

                        <div class="col-lg-12">
                            <form class="m-t" method="POST" action="{{ route('password.request') }}">
                                {{ csrf_field() }}

                                <input type="hidden" name="token" value="{{ $token }}">

                                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <label for="email" class="control-label">E-Mail Address</label>
                                    <input id="email" type="email" class="form-control" placeholder="Email address" name="email" value="{{ $email or old('email') }}" required autofocus>


                                    @if ($errors->has('email'))
                                        <span class="help-block text-danger text-center">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div id="pwd-container" class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password" class="control-label">Password</label>
                                    <input id="password" type="password" class="form-control password-control" name="password" required>

                                    @if ($errors->has('password'))
                                        <span class="help-block text-danger text-center">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif

                                    <div class="form-group m-t">
                                        <div class="pwstrength_viewport_progress"></div>
                                    </div>
                                </div>

                                <div id="pwd-container-confirm" class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password-confirm" class="control-label">Confirm Password</label>
                                    <input id="password-confirm" type="password" class="form-control password-control-confirm" name="password_confirmation" required>

                                    @if ($errors->has('password_confirmation'))
                                        <span class="help-block text-danger text-center">
                                            <strong>{{ $errors->first('password_confirmation') }}</strong>
                                        </span>
                                    @endif

                                    <div class="form-group m-t">
                                        <div class="pwstrength_viewport_progress_confirm"></div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary block full-width m-b">Reset Password</button>
                            </form>
                        </div>
                    </div>
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                            <a href="{{ url("login") }}"><button type="submit" class="btn btn-primary text-right">Login</button></a>
                        </div>
                    @endif
                </div>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="text-center">
                <p>© Copyright Webuzz {{date("Y")}}<p/>
            </div>
        </div>
    </div>
</body>
@endsection
