<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Webuzz Impact</title>

    <!-- STYLE SECTION -->
    <link href="{!! asset('css/login/login.css') !!}" media="all" rel="stylesheet" type="text/css" />
    <!-- .STYLE SECTION -->

</head>

<body>
<!-- particles.js container -->
<div id="particles-js"></div>
<div class="login-form">
    <div class="top-login">
        <img alt="logo-impact" src="{{asset('images/logos/impact-login.png')}}" class="img-responsive">
    </div>

    <h1>WEBUZZ OPPORTUNITY PLATFORM</h1>
    <div class="login-top">
        <form class="form-horizontal" method="POST" action="{{ route('login') }}">
            <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
            <div class="login-ic">
                <i></i>
                <input required type="text" name="email" placeholder="Email Address">
                <div class="clear"> </div>
            </div>

            <div class="login-ic form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <i class="icon"></i>
                <input required type="password" name="password" placeholder="Password">
                <div class="clear"> </div>
            </div>

            <div class="log-bwn">
                <input type="submit"  name="go" value="sign in">
            </div>

            <div class="form-group">
                <div id="forgot-password">
                    <a href="{{ route('password.request') }}">
                        <span>Forgot Your Password?</span>
                    </a>
                </div>

                <div class="checkbox">
                    <div class="styled-input--square styled-input-single">
                        <input id="checkbox" type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label for="checkbox">Remember Me</label>
                    </div>
                </div>
            </div>
        </form>
    </div>

    @if ($errors->has('email'))
        <div class="error_login">{{ $errors->first('email') }}</div>
    @endif
    @if ($errors->has('password'))
        <div class="error_login">{{ $errors->first('password') }}</div>
    @endif

    <section>
        <p class="copy">© Copyright Webuzz {{date("Y")}}</p>
    </section>
</div>
</body>

<!-- SCRIPTS SECTION-->
<script src="{!! asset('js/login/login.js') !!}" type="text/javascript"></script>
<!-- .SCRIPTS SECTION-->
</html>
