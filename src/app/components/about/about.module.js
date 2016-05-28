
import angular from 'angular';
import 'angular-ui-router';
import router from './about.router';

export default angular.module('app.about', ['ui.router']).config(router);