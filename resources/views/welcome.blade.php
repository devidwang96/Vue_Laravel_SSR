<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
{!! $ssr !!}

<script>
    var Laravel = {
        token : '{{ csrf_token() }}',
        translations : {!! $translations !!},
        supportedLocales : {!! json_encode(\Mcamara\LaravelLocalization\Facades\LaravelLocalization::getSupportedLocales()) !!},
        currentLocaleChar : '{{ app()->getLocale() }}',
        defaultLocaleChar : '{{ config('app.fallback_locale') }}',
        locales_chars : JSON.parse('{!! json_encode(config('app.locales')) !!}'),
        session : {
            flash : {

            }
        },
        get currentLocale(){
            return this.supportedLocales[this.currentLocaleChar];
        },
        get defaultLocale(){
            return this.supportedLocales[this.defaultLocaleChar];
        },
        getLocalizedRoute(route, locale_param){
            var locale = locale_param || this.currentLocaleChar;

            return locale == this.defaultLocaleChar
                ? route
                : (
                    route.params
                        ? Object.assign(route, { params : Object.assign(route.params, { locale }) })
                        : Object.assign(route, { params : { locale }})
                )
        },
        getLocalizedUrl : function(url, locale_param){
            var locale = locale_param || this.currentLocaleChar;

            return locale == this.defaultLocaleChar
                ? url
                : ('/' + locale + '/' + url).replace('//', '/');
        },
        url(url){
            return '{{ url('/') }}' + url;
        }
    }
</script>

<script src="{{ asset('js/entry-client.js') }}"></script>
</body>
</html>
