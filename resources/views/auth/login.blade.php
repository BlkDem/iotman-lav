@extends('layouts.auth')

@section('content')

<style>
    .str0 {
    stroke: var(--bs-white);
    stroke-opacity: 0.5;
    stroke-width: 30.55;
    stroke-miterlimit: 22.9256
}

.str1 {
    stroke: var(--bs-white);
    stroke-opacity: 0.5;
    stroke-width: 15.28;
    stroke-linejoin: bevel;
    stroke-miterlimit: 22.9256
}

/* .fil0 {fill:none} */
/* .fil0 {fill:var(--bs-dark);fill-rule:nonzero} */
.fil1 {
    /* fill: var(--bs-dark); */
    fill:url(#linear-gradient);
    /* fill-opacity: 0.1; */
    fill-rule: nonzero
}

.fil0 {
    /* fill: var(--bs-dark); */
    fill:url(#radial-gradient);
    /* fill-opacity: 0.1; */
    fill-rule: nonzero
}

.logo {
    display: flex;
    margin-right: 16px;
    margin-left: 4px;
    width: 36px;
}
</style>

<div class="card m-4 py-4 border-4 border-top border-bottom rounded-bottom rounded-top border-secondary">
    <div class="mb-4 card-header text-center text-uppercase">

    <div @click="goRoot" style="cursor: pointer;
    display: flex;
    margin-right: 16px;
    margin-left: 4px;
    margin-bottom: -78px;
    margin-top: -18px;
    width: 100px;">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality;
        fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 600.9 600.9" xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">

            <linearGradient id="linear-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="var(--bs-secondary)" />
                <stop offset="50%" stop-color="var(--bs-primary)" />
                <stop offset="100%" stop-color="var(--bs-secondary)" />
            </linearGradient>

            <radialGradient id="radial-gradient">
                <stop offset="60%" stop-color="var(--bs-primary)" />
                <stop offset="100%" stop-color="var(--bs-secondary)" />
            </radialGradient>

            <g id="layer1">
                <metadata id="umolab_icon" />
                <circle class="fil0 str0" cx="300.45" cy="300.45" r="285.17" />
                <path class="fil1 str1"
                    d="M168.64 155.24l65.46 0 0 290.42 -32.95 0 -32.51 -32.51 0 -257.91zm263.62 0l0 257.91 -32.51 32.51 -118.63 0 0 -65.47 85.67 0 0 -224.95 65.47 0z" />
            </g>
        </svg>
    </div>

        <h1>{{ __('Login') }}</h1>
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                <div class="col-md-6">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                        name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                <div class="col-md-6">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                        name="password" required autocomplete="current-password">

                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember"
                            {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary w-100">
                        {{ __('Login') }}
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 offset-md-4" style="display: flex;
                    flex-direction: column;
                    align-items: flex-start;">
                    @if (Route::has('password.request'))
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>
                    @endif
                    <a class="btn btn-link" href="{{ route('register') }}">
                        {{ __('Register') }}
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
