

import angular from 'angular';

import 'angular-route';
import 'angular-ui-router';
import 'oclazyload';
import 'angular-ui-bootstrap';

import HomeModule from './components/home/home.module';
import AboutModule from './components/about/about.module';

import router from './app.router';

export default angular.module('app', [
    'ngRoute', 'ui.router', 'oc.lazyLoad', 'ui.bootstrap',
    HomeModule.name, AboutModule.name
]).config(router);