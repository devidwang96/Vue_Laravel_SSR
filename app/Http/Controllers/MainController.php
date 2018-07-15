<?php

namespace App\Http\Controllers;
use App\Services\XMLHttpRequest;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){
        $translations = [];

        foreach (scandir(resource_path('lang/').'/') as $dir) {
            if($dir != "." && $dir != './' && $dir != '../' && $dir != '..'){
                foreach (scandir(resource_path('lang/').$dir.'/') as $file_name) {
                    if(is_file(
                        resource_path('lang/').$dir.'/'.$file_name
                    )){
                        file_exists($absolute_path = resource_path('lang/'.$dir.'/'. $file_name))
                        && $translations[$dir][preg_replace('/\.[^.]+$/','',$file_name)] = require_once($absolute_path);
                    }
                }
            }
        }

        $translations = json_encode($translations, true);

        if(url('/') == mb_substr(LaravelLocalization::getNonLocalizedURL(request()->path()),0, -1))
            return redirect(LaravelLocalization::localizeURL('home', app()->getLocale()));

        $ssr = $this->render(request()->path() ,$translations);

        preg_match('/<summary id="meta-info">(?s)(.*)<\/summary>/', $ssr, $matches);

        $meta = $matches[1] ?? null;

        return view('welcome', compact('ssr', 'translations', 'meta'));
    }

    public function render($path, $translations){

        $renderer_source = \File::get(base_path('node_modules/vue-server-renderer/basic.js'));
        $app_source = \File::get(base_path('public/js/entry-server.js'));

        $v8 = new \V8Js();

        ob_start();

        $v8->XMLHttpRequest = function () {
            return new XMLHttpRequest();
        };

        $supported_locales = json_encode(\Mcamara\LaravelLocalization\Facades\LaravelLocalization::getSupportedLocales());

        $csrf_token = csrf_token();

        $locale = app()->getLocale();

        $fallback_locale = config('app.fallback_locale');

        $locales_chars = json_encode(config('app.locales'));

        $absolute_url = url('/');

        $js =
            <<<EOT
var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } }; 
this.global = { process: process };
var server_rendered = true;
var Laravel = {
    server_side : true,
    token : '$csrf_token',
    translations : $translations,
    supportedLocales : $supported_locales,
    currentLocaleChar : '$locale',
    defaultLocaleChar : '$fallback_locale',
    locales_chars : $locales_chars,
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
    getLocalizedRoute : function(route, locale_param){
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
        return '$absolute_url' + url;
    }
}
var url = "$path";
EOT;

        $v8->executeString($js);
        $v8->executeString($renderer_source);
        $v8->executeString($app_source);

        return ob_get_clean();
    }
}
